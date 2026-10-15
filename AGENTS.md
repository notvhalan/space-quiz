# Space Quiz – agent instructions

- Single file: everything lives in `index.html` (HTML, CSS, JS). No build step, server, or dependencies.
- Keep it accessible: visible focus states, keyboard support (keys 1–4 answer, Enter advances), `aria-live` on the question, and respect `prefers-reduced-motion`.
- Support light and dark via `prefers-color-scheme` using the CSS variables in `:root`.
- Sans-serif body text at 14–16px; layout stays a narrow centered column (max 480px).
- Questions are the `Q` array: `[text, options, correctIndex]`. Keep 10 questions.
- Comment code only when needed.
- Verify changes in a real browser (answer right and wrong, reach the results screen, restart) before finishing.
