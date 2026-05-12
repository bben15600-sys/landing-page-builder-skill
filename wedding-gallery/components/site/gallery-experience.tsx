"use client";

import { useState } from "react";
import { AiSearch } from "./ai-search";
import { AlbumsGrid } from "./albums-grid";
import { Gallery } from "./gallery";

export function GalleryExperience() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  const [activeFace, setActiveFace] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const clearFilters = () => {
    setActiveAlbum(null);
    setActiveFace(null);
    setSearchQuery("");
  };

  return (
    <>
      <AiSearch
        onSelectFace={(id) => {
          setActiveFace(id);
          setActiveAlbum(null);
          setSearchQuery("");
        }}
        onSearch={(q) => {
          setSearchQuery(q);
          setActiveAlbum(null);
          setActiveFace(null);
        }}
      />
      <AlbumsGrid
        activeAlbum={activeAlbum}
        onSelectAlbum={(id) => {
          setActiveAlbum(id);
          setActiveFace(null);
          setSearchQuery("");
        }}
      />
      <Gallery
        activeAlbum={activeAlbum}
        activeFace={activeFace}
        searchQuery={searchQuery}
        onClearFilters={clearFilters}
      />
    </>
  );
}
