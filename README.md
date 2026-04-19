# MN Boiler Operator License — Practice Exam

A self-contained, zero-dependency practice exam platform for the Minnesota
Boiler Operator License, covering **Special Engineer**, **2nd Class A**,
**1st Class A**, and **Chief A** tiers. Runs entirely in the browser — just
open `index.html`.

Questions are drawn from a ~1,100-item pool covering MN Statutes Ch. 326B,
MN Rules Ch. 5225, ASME BPVC, NBIC, NFPA 85, and CSD-1.

> **Disclaimer:** This is an educational study aid only and is **not a
> substitute** for directly reviewing official source materials. Always
> consult current publications from the Minnesota DLI and the referenced
> code bodies when preparing for your license exam.

---

## Quick start

1. Clone or download this repo.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).

That's it — no build step, no server, no dependencies.

If you'd rather serve it over HTTP (useful for the question editor's
direct-save feature), any static server works:

```bash
# Python 3
python -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## Features

### Exam experience
- **4 license tiers.** Pick one; your exam is drawn from that tier and every
  lower tier, matching how the real MN DLI exams build on each other.
- **Configurable exam sizes** — 50 (Special), 80 (2A), 130 (1A), 140 (Chief A).
- **Randomized question order** (toggleable) + **shuffled answer options**
  per session so you can't memorize answer positions.
- **70% passing threshold**, matching DLI requirements.
- **Per-question explanations** shown after you submit.

### Study aids
- **Flag questions** (🚩 button or <kbd>F</kbd> key) to revisit after scoring.
- **Study Mode** — same feedback, no pass/fail grade, framed as a study
  session rather than a test.
- **Resume in-progress exams.** Refresh, close the tab, come back tomorrow —
  your answers, flags, and position are saved to `localStorage`.
- **Per-category performance breakdown** on the results screen, sorted by
  weakest area first so you know what to drill.
- **Three review modes**: review all questions, missed only, or flagged only.

### Accessibility & UX
- Full keyboard operation (see shortcuts below).
- `role="radiogroup"` answer options with `aria-checked` state.
- Labeled SVGs, `aria-live` explanation region, focus rings.
- Light / dark themes with system-preference detection + persistence.
- Responsive down to 375px with enlarged touch targets on mobile.

### Keyboard shortcuts (during exam)

| Key | Action |
| --- | --- |
| <kbd>1</kbd>–<kbd>4</kbd> | Select answer A–D |
| <kbd>Enter</kbd> | Submit answer, or advance to next question |
| <kbd>←</kbd> / <kbd>→</kbd> | Previous / next question |
| <kbd>F</kbd> | Flag / unflag current question |

---

## Question editor

Open `editor.html` to browse, filter, add, edit, and delete questions
across all four tiers.

- **Filter & search** by text, level, category, or correct-answer position.
- **Answer-balance bars** show how evenly correct answers are distributed
  across A/B/C/D — helps avoid the "always pick C" trap.
- **Category health** sidebar flags any questions whose category doesn't
  match the canonical list, so tier files don't drift.
- **Direct disk save** (Chrome/Edge) via the File System Access API —
  click **Open** to link a tier file, then **Save** writes back to disk.
  Other browsers get a **Download** fallback.

---

## File structure

```
.
├── index.html              # Exam application (CSS + JS inline)
├── editor.html             # Question editor (CSS + JS inline)
├── questions-special.js    # Tier: Special Engineer
├── questions-2a.js         # Tier: 2nd Class A
├── questions-1a.js         # Tier: 1st Class A
├── questions-chief-a.js    # Tier: Chief A
└── README.md
```

Each tier file exports one `const QUESTIONS_<TIER> = [...]` array. They're
**lazy-loaded**: `index.html` only fetches the tier(s) needed for the
selected license hierarchy.

### Question schema

```js
{
  id: 42,
  level: "2a",                  // "special" | "2a" | "1a" | "chief_a"
  category: "Safety Valves",    // must match CANONICAL_CATEGORIES in editor.html
  question: "…",
  options: ["A text", "B text", "C text", "D text"],
  correct: 2,                   // 0=A, 1=B, 2=C, 3=D
  explanation: "Why this is the correct answer, with code references."
}
```

### Canonical categories

Defined in `editor.html` as `CANONICAL_CATEGORIES`. Adding a new category
means editing that list **and** the editor's `<select>` dropdown so tier
files stay consistent.

---

## Data persistence

Everything is stored in the browser's `localStorage` — no server, no
account, no telemetry. Two keys:

| Key | Contents |
| --- | --- |
| `mnBoilerExam.v1` | Current in-progress exam (level, question IDs, answers, flags, option orders, study-mode flag) |
| `mnBoilerExam.theme` | `light` or `dark` |

Clearing site data or clicking **Discard** on the resume banner wipes
saved exam state.

---

## Contributing

Pull requests welcome — especially for:

- New or corrected questions (please include a citation in the explanation)
- Category cleanup / canonicalization
- Accessibility improvements

To add questions, open `editor.html`, add them there, then either use the
direct-save feature (Chrome/Edge) or the **Download all tier files**
button and commit the updated `questions-*.js` files.

---

## License

No license specified. Add one to `LICENSE` if you plan to accept outside
contributions or redistribute.
