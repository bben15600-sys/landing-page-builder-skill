# CodeForge
## מנוע ה-AI האוניברסלי לבניית כל דבר

> **חזון:** מערכת אחת. כל מסגרת פיתוח. כל פלטפורמה. כל פרויקט.
> מ-prompt בעברית לאפליקציה חיה בייצור — תוך דקות.

---

## 🎯 מה זה CodeForge?

CodeForge היא **מערכת AI שבונה תוכנה כמו מהנדס בכיר** — מקבלת תיאור בשפה טבעית ומייצרת פרויקטים מלאים: אתרים, אפליקציות web ו-mobile, backends, integrations, ו-data pipelines. עם חיבור ל-MCP, ניתוב חכם בין מודלי AI מרובים, ו-deploy לייצור בלחיצת כפתור.

זו לא רק "עוד צ'אט AI לקוד" — זו **תשתית** שמשלבת את הטוב מ-Claude Code, v0, Bolt ו-Devin, ושמה את הבעלות, הגמישות והאוטונומיה בידיים שלך.

---

## ✨ במה היא מיוחדת — 5 יתרונות תחרותיים

### 1. 🌐 לא נעולה למסגרת אחת
v0, Bolt, Lovable — כולם תקועים על React + Next.js + Supabase.
**CodeForge בונה בכל דבר:** Next.js, SvelteKit, Vue, Django, Rails, Go, FastAPI, React Native, Expo, Electron, Unity, CLIs, ML pipelines.

### 2. 🔌 MCP-Native מהיום הראשון
אינטגרציה מובנית ל-10 שירותים מובילים דרך Model Context Protocol:

| כלי | מה הוא נותן |
|---|---|
| **GitHub** | קוד, PRs, Issues, Actions |
| **Vercel** | Deploy, logs, env vars |
| **Cloudflare** | Workers, KV, R2, DNS |
| **Postgres + Supabase** | DB, Auth, Storage |
| **Stripe** | תשלומים מובנים באפליקציות |
| **Figma Dev Mode** | מ-design לקוד |
| **Playwright** | בדיקת UI בדפדפן אמיתי |
| **Sentry** | שגיאות runtime חוזרות ללולאה |
| **Filesystem + Git** | פעולות בסיסיות |

### 3. 🧠 מנוע Multi-Provider חכם
לא תלוי במודל אחד. ניתוב אוטומטי לפי משימה:

| משימה | מודל ראשי | סיבה |
|---|---|---|
| תכנון ארכיטקטוני | Claude Opus 4.7 | חשיבה עמוקה |
| כתיבת קוד יומיומית | Claude Sonnet 4.6 | מאוזן, חסכוני |
| עריכות פשוטות | Claude Haiku 4.5 | מהיר, זול פי 10 |
| Codebase ענק (>500K שורות) | Gemini 3.1 Pro | חלון 1M tokens |
| Terminal-heavy | GPT-5.5 | הכי טוב ב-shell |
| Privacy / On-prem | Qwen3-Coder 480B | open weights |

**חיסכון אמיתי:** Routing חכם + prompt caching = **60-80% פחות עלות API** לעומת שימוש במודל קצה לכל קריאה.

### 4. 🪞 חשיפה כ-MCP Server (Distribution Play)
המערכת לא רק **צורכת** MCP — היא **מספקת** אותו.
כל משתמש Cursor, Claude Code, ChatGPT או Zed יוכל לקרוא ל-CodeForge מתוך ה-IDE שלו:
```
"צור פרויקט חדש מהתיאור הבא…"
"החל את הפאטץ' הזה על פרויקט X"
"תן לי את ה-URL של ה-preview"
```
זה הופך אותנו לתשתית שמורחקת על-ידי כל מי שכבר משתמש ב-IDE עם AI.

### 5. 🔬 Verification עם דפדפן אמיתי
v0/Bolt עוצרים ב-typecheck. **CodeForge פותח דפדפן, לוחץ על כפתורים ובודק שזה עובד.**
תבנית Playwright Test Agents (אנט'רופיק, Oct 2025): plan → generate → execute → heal.
זו הסיבה שמשתמשים לא יקבלו "הצלחתי" כשבמציאות הכפתור שבור.

---

## 🛠️ מה היא יכולה לעשות — היכולות המלאות

### 💻 בניית קוד (כן, ברמה של Claude Code — ומעבר)

| יכולת | CodeForge | Claude Code |
|---|---|---|
| קריאת codebases עד 1M tokens | ✅ | ✅ |
| עריכות multi-file עם diffs מדויקים | ✅ | ✅ |
| הרצת Bash בסביבה מבוקרת | ✅ | ✅ |
| חיפוש Web ושליפת דוקומנטציה | ✅ | ✅ |
| MCP integrations (10+ שירותים) | ✅ | ✅ |
| Multi-agent fan-out לחקירה במקביל | ✅ | ✅ |
| Plan Mode עם אישור משתמש | ✅ | ✅ |
| זיכרון ארוך-טווח (CLAUDE.md / SKILL.md) | ✅ | ✅ |
| Skills library (Voyager-style, מתחזק את עצמו) | ✅ | ✅ |
| Hooks ואוטומציות מותאמות | ✅ | ✅ |
| בדיקת UI בדפדפן אמיתי בלולאה | ✅ | חלקי |
| Live preview גרפי תוך כדי בנייה | ✅ | ❌ |
| Multi-provider routing (לא רק Claude) | ✅ | ❌ |
| Deploy מובנה ל-Vercel/CF/Netlify | ✅ | ❌ |
| ממשק Web ידידותי ללא-מפתחים | ✅ | ❌ |
| ניהול ארגונים, צוותים, billing | ✅ | ❌ |
| BYOK (משתמשים מביאים API keys שלהם) | ✅ | חלקי |
| חשיפה כ-MCP server לכלים אחרים | ✅ | ❌ |

**שורה תחתונה:** כל מה שClaude Code יודע — CodeForge יודעת. **ועוד.**

### 🌐 מה אפשר לבנות איתה

- 🛍️ **אתרי מסחר** — Shopify-like, Stripe מובנה, payment flows
- 📱 **אפליקציות SaaS** — auth, billing, dashboards, multi-tenancy
- 📊 **כלי פנים-ארגוניים** — admin panels, CRMs, BI dashboards
- 🤖 **AI apps** — chatbots, agents, RAG over data
- 🎮 **משחקים ב-browser** — Phaser, Three.js, WebGPU
- 📲 **אפליקציות mobile** — Expo + React Native
- 🔌 **APIs ו-backends** — REST, GraphQL, tRPC, gRPC
- 🛠️ **CLI tools ו-scripts** — Node, Python, Go
- 🧬 **Data pipelines** — ETL, scrapers, analytics

---

## 💰 השוואת עלויות מול Claude Code

### השאלה הכי חשובה: **האם זה יעלה לי יותר?**

**תשובה קצרה:** לא. ובטווח הארוך — הרבה פחות. הנה למה:

### 🔑 אתה ה-Engine. אתה קובע.

Claude Code היום: אתה משלם ל-Anthropic סכום קבוע ($20-$200) על Pro/Max עם מגבלות.
**CodeForge:** אתה **בעלים** של המערכת. אתה בוחר איך לשלם.

### 📊 שלוש דרכים להפעיל את CodeForge

| מודל | עלות חודשית | יתרון |
|---|---|---|
| **BYOK** (Anthropic API ישיר) | רק token usage | אותו price-point של Claude Code, אבל בלי מגבלות messages |
| **Multi-provider routing** | 60-80% פחות מ-Anthropic ישיר | ניתוב חכם למודל הזול ביותר שמספיק |
| **Open weights (Qwen/DeepSeek)** | ~$0 (self-hosted) | עלות חומרה בלבד, פרטיות מלאה |

### 🎯 דוגמה מספרית

**Claude Code Max 5x** ($100/חודש):
- ~225 הודעות / 5 שעות
- מגבלת usage קבועה
- מודל יחיד (Anthropic)

**CodeForge עם BYOK:**
- ~$30-50 חודש בקריאות API ישירות לאותם משימות (עם prompt caching)
- אין מגבלות messages
- 6 ספקים זמינים
- **חיסכון של $50-70/חודש לאותה כמות עבודה**

### 🔄 ועם prompt caching?
Anthropic נותן **90% הנחה** על cache reads. עבור system prompt של 50K tokens שחוזר על עצמו — חיסכון של 70-90% מעלות ה-input.

---

## 🏛️ ארכיטקטורת המערכת

### השכבות העיקריות

```
┌─────────────────────────────────────────────────────────┐
│  ממשק משתמש (Next.js + AI SDK v5)                       │
│  Chat • Monaco Editor • Live Preview • File Tree        │
└─────────────────────────────────────────────────────────┘
                          ↓ Streaming
┌─────────────────────────────────────────────────────────┐
│  Agent Loop (Single-agent harness + sub-agents)         │
│  Tools: Read/Edit/Write/Bash/Grep/Web/Task/Browser      │
└─────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────┬──────────────────┬──────────────────┐
│  Multi-Provider  │   MCP Gateway    │   Sandbox        │
│  Routing         │   (10+ servers)  │   (Firecracker)  │
│  Claude/GPT/Gem  │   OAuth + audit  │   WebContainers  │
└──────────────────┴──────────────────┴──────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  Storage: Neon Postgres + pgvector + Cloudflare R2      │
│  Auth: WorkOS  •  Billing: Stripe  •  Jobs: Inngest     │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  Deploy: Vercel • Cloudflare Pages • Netlify • Custom   │
└─────────────────────────────────────────────────────────┘
```

### Stack מומלץ

| שכבה | טכנולוגיה | סיבה |
|---|---|---|
| Frontend | Next.js 15 + TypeScript + Tailwind | תקן התעשייה לסוכני AI |
| Streaming | Vercel AI SDK v5 | typed end-to-end, resumable |
| Editor | Monaco (desktop) + CodeMirror 6 (mobile) | VS Code DX |
| Database | Neon Postgres + pgvector | branching ל-preview environments |
| ORM | Drizzle | edge-compatible, מהיר |
| Auth | WorkOS AuthKit | SSO חינמי עד 1M MAU |
| Billing | Stripe + Paddle (MoR) | תמיכה ב-VAT ישראלי |
| Sandbox | WebContainers + E2B | preview מיידי + heavy ops |
| Observability | Langfuse + OpenLLMetry | OTel-native |
| Background jobs | Inngest | durable execution לסוכנים ארוכים |

---

## 🔐 אבטחה ברמה Enterprise

המערכת בנויה עם שכבות הגנה שכבר עברו battle-test בתעשייה:

- ✅ **Credential Proxy** — המודל אף פעם לא רואה סודות אמיתיים
- ✅ **Sandbox-per-session** — Firecracker microVMs בידוד קרנל מלא
- ✅ **Deny Rules** — `rm -rf`, `git push --force`, `DROP TABLE` חסומים בקוד
- ✅ **MCP Hash-Pinning** — מגן מפני התקפת MCPoison (CVE-2025-54136)
- ✅ **Pre-execution Classifier** — Lakera + Llama Prompt Guard 2
- ✅ **Audit Log מלא** — ClickHouse עם Merkle chain חתום
- ✅ **SOC 2 Type 2 Track** — מהיום הראשון עם Vanta

---

## 📈 מודל עסקי

### תמחור פשוט וברור

| | **Free** | **Pro** | **Team** | **Enterprise** |
|---|---|---|---|---|
| מחיר | $0 | $25/חודש | $35/seat | Custom |
| Credits/חודש | 30 | 150 | 200/seat | ∞ |
| פרויקטים פרטיים | ❌ | ✅ | ✅ | ✅ |
| Custom domain | — | 1 | 5 | ∞ |
| SSO | — | — | Google | SAML/SCIM |
| BYOK | — | — | — | ✅ |
| SLA | — | — | — | 99.9% |

3x markup על עלות API → 65-70% gross margin.

---

## 🚀 לוח זמנים — מ-0 ל-MVP בשישה חודשים

| חודש | שלב | תוצר |
|---|---|---|
| **1** | Foundation | Next.js + Postgres + Auth + Stripe |
| **2** | Agent Core | Streaming agent loop + 7 tools + caching |
| **3** | UI/UX | Chat + Monaco + file tree + iframe preview |
| **4** | Execution | WebContainers + E2B + Playwright verify |
| **5** | Hardening | Multi-provider routing + Observability + Security |
| **6** | Differentiation | MCP gateway + Skills library + A/B + SOC 2 |

---

## 🎯 למה זה הזמן הנכון

- 📊 **SWE-bench Verified הגיע ל-82%** ב-2026 — סוכנים אוטונומיים על משימות אמיתיות
- 💵 **Lovable עשתה $100M ARR ב-8 חודשים**, Cursor חצתה $500M ARR
- 🌍 **MCP הפך לתקן** — Anthropic, OpenAI (Apr 2025), Cursor, Zed, Windsurf
- 🔑 **תעלת אמיתית נסגרת מהר** — מי שלא משחק עכשיו לא ישחק בכלל

---

## 💡 שורה תחתונה

CodeForge הופכת אותך מ**משתמש** של Claude Code ל**בעלים** של מנוע AI עצמאי.

- ✅ כל היכולות של Claude Code — וגם יותר
- ✅ עלות נמוכה יותר תוך שליטה מלאה
- ✅ ממשק Web יפה לא-מפתחים, API למפתחים
- ✅ אינטגרציה עם 10+ שירותים דרך MCP
- ✅ אסטרטגיית distribution דרך חשיפת המערכת כ-MCP server
- ✅ אבטחה ו-compliance ברמת enterprise

**זה לא רק "Claude Code שלי". זו הפלטפורמה שעליה אבנה את כל מה שעוד יבוא.**

---

## 📞 שלבים הבאים

1. **אישור החזון** — אתה אומר "כן" והפיתוח מתחיל
2. **Phase 1 (חודש ראשון)** — Foundation מלאה, ~3-4 ימי עבודה ראשונים
3. **Iteration שבועית** — דמו מתפקד כל שבוע, תיקונים מיידיים לפי משוב
4. **MVP חי תוך 90 יום** — לקוחות beta ראשונים

---

*מסמך זה הוא תקציר של 15 מחקרים עצמאיים מעמיקים שכוללים: ניתוח מתחרים, ארכיטקטורת סוכנים, מודלי AI, sandboxes, MCP, אבטחה, observability, תמחור, ועוד.*
