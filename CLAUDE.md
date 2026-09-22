# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio website for Dhruva Raja (didster42), hosted on GitHub Pages. Plain HTML + CSS + JS, no build tools, no dependencies, no server required. Open `index.html` directly in a browser.

## File structure

```
index.html          # Main pager page
post.html           # Blog post detail page (?slug=...)
css/pager.css       # All styles (shared by both pages)
js/content.js       # All site content as plain JS objects (CONTENT global)
js/pager.js         # Renders index.html from CONTENT
js/post.js          # Renders post.html from CONTENT
assets/             # Project screenshots (not currently linked)
```

Legacy files (`css/styles.css`, `js/background.js`, `js/script.js`, `blog/`, `content/`) are orphaned and can be deleted.

## Design system

Raw terminal / `git log -p | less` aesthetic. CSS variables in `pager.css`:
- Background `#090b09`, phosphor-green text `#a9dfb4`, bright `#eafff0`
- Amber hashes `#d99a5b`, amber links `#f2c879`, border/dim `#1c2b20`
- CRT scanlines via `repeating-linear-gradient` on `.pane`
- JetBrains Mono, font-size 17px, line-height 1.95

Layout: `.frame` (flex column 100vh) → `.topbar` + `.pane` (scrollable, `overflow-y: auto`) + `.statusbar`.
Row structure: `<div class="row"><span class="ln">N</span><span class="rc">content</span></div>`

Section headers (`<div id="..." class="sec">`) have anchor IDs for nav links but do not consume line numbers.

## Adding content

Everything lives in `js/content.js`. No other files need touching.

**New blog post** — add an object to `CONTENT.blog`:
```js
{
  slug: 'my-post',          // used in URL: post.html?slug=my-post
  hash: 'a1b2c3d4',         // 8-char hex, decorative
  title: 'My Post Title',
  subtitle: 'one line shown on index',
  date: '2025-01-15',
  tags: ['Tag1', 'Tag2'],
  body: [
    { type: 'p',         text: 'Paragraph text.' },
    { type: 'h2',        text: 'Section heading' },
    { type: 'blockquote', text: 'Quoted text.' },
  ],
}
```

**New timeline entry** — add an object to `CONTENT.timeline`:
```js
{ hash: 'a1b2c3d4', title: 'Job Title', date: 'YYYY-MM', body: ['line 1', 'line 2'] }
```

**New project** — add to `CONTENT.projects`.

## Line number system

Both `pager.js` and `post.js` use an `n` counter: `nextN()` returns the current value and increments. Every `row()` or `erow()` call consumes one number. The blinking cursor is always the final line. Status bar `(END)` count is written after `pane.innerHTML` is set.
