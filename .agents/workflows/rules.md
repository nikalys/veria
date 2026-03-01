---
description: How to build and iterate on projects with precise, reviewable edits
---

# Client Website Build Workflow

This workflow governs how you approach building and modifying this project. Follow these rules strictly. The goal is surgical precision and iterative review, not autonomous bulk execution.

---

## Core Principles

1. **Never overwrite entire files.** Use `replace_file_content` or `multi_replace_file_content` for targeted edits. Only use `write_to_file` with `Overwrite: true` when explicitly asked to create a brand new file or when the user says to start from scratch.

2. **One section at a time.** When building a page, work in discrete chunks: header → hero → services → values → CTA → footer. After each chunk, briefly summarize what you added and wait for the user to confirm before continuing.

3. **Show what changed.** After every edit, provide a brief summary of exactly what was modified (which section, which lines, what was added/removed). This mimics a diff review.

4. **Ask before making design decisions.** Do not independently choose a design direction (brutalist, minimalist, glassmorphism, etc.) without first confirming with the user. Present 2-3 options if uncertain.

5. **Ask before using the browser.** Never use the `browser_subagent` or any browser-based testing tools without explicit permission from the user.

---

## Editing Existing Pages

When modifying an existing page:

1. **View the file first** — always read the current state before editing
2. **Identify the exact lines** that need to change
3. **Make the smallest possible edit** that achieves the goal
4. **Summarize what changed** in plain language

---

## Anti-Patterns (Never Do These)

- ❌ Rewriting an entire file when only 10 lines need to change
- ❌ Writing copy that sounds robotic or overly corporate ("Initiate Contact", "System Parameters")
- ❌ Using the browser for verification/testing without explicit approval
