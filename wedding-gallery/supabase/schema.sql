-- Enable pgvector for face embeddings
create extension if not exists vector;

-- Events: one row per shoot/wedding
create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  date date,
  cover_url text,
  created_at timestamptz default now()
);

-- Photos: each uploaded image belongs to an event
create table if not exists photos (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  storage_path text not null,
  width int,
  height int,
  created_at timestamptz default now()
);
create index if not exists photos_event_id_idx on photos(event_id);

-- Faces: one row per detected face. Embedding is 128-d (face-api descriptor)
create table if not exists faces (
  id uuid primary key default gen_random_uuid(),
  photo_id uuid not null references photos(id) on delete cascade,
  bbox jsonb not null,
  embedding vector(128) not null,
  created_at timestamptz default now()
);
create index if not exists faces_photo_id_idx on faces(photo_id);
create index if not exists faces_embedding_idx on faces using ivfflat (embedding vector_cosine_ops) with (lists = 100);

-- Public read policies (anyone can view events/photos/faces)
alter table events enable row level security;
alter table photos enable row level security;
alter table faces  enable row level security;

drop policy if exists events_public_read on events;
create policy events_public_read on events for select using (true);
drop policy if exists photos_public_read on photos;
create policy photos_public_read on photos for select using (true);
drop policy if exists faces_public_read on faces;
create policy faces_public_read on faces for select using (true);

-- Open write policies for MVP (no auth yet). Tighten when adding admin auth.
drop policy if exists events_public_write on events;
create policy events_public_write on events for insert with check (true);
drop policy if exists photos_public_write on photos;
create policy photos_public_write on photos for insert with check (true);
drop policy if exists faces_public_write on faces;
create policy faces_public_write on faces for insert with check (true);
drop policy if exists events_public_update on events;
create policy events_public_update on events for update using (true) with check (true);
drop policy if exists events_public_delete on events;
create policy events_public_delete on events for delete using (true);
drop policy if exists photos_public_delete on photos;
create policy photos_public_delete on photos for delete using (true);

-- RPC for nearest-neighbour face search (cosine similarity)
create or replace function match_faces(query_embedding vector(128), event uuid, match_count int default 200, similarity_threshold float default 0.5)
returns table (photo_id uuid, similarity float)
language sql stable as $$
  select f.photo_id,
         1 - (f.embedding <=> query_embedding) as similarity
  from faces f
  join photos p on p.id = f.photo_id
  where p.event_id = event
    and 1 - (f.embedding <=> query_embedding) > similarity_threshold
  order by f.embedding <=> query_embedding
  limit match_count;
$$;

-- Storage bucket for photos (public read)
insert into storage.buckets (id, name, public)
values ('photos', 'photos', true)
on conflict (id) do update set public = true;

-- Allow public uploads (MVP). Tighten with auth later.
drop policy if exists "photos_public_upload" on storage.objects;
create policy "photos_public_upload" on storage.objects for insert
  with check (bucket_id = 'photos');

drop policy if exists "photos_public_read" on storage.objects;
create policy "photos_public_read" on storage.objects for select
  using (bucket_id = 'photos');

drop policy if exists "photos_public_delete" on storage.objects;
create policy "photos_public_delete" on storage.objects for delete
  using (bucket_id = 'photos');
