(() => {
  const pane = document.getElementById('pane');
  const lineCountEl = document.getElementById('line-count');

  let n = 1;
  const nextN = () => n++;
  const lnSpan = num => `<span class="ln">${num}</span>`;

  const row = (content, rcCls) => {
    const num = nextN();
    return `<div class="row">${lnSpan(num)}<span class="rc${rcCls ? ' ' + rcCls : ''}">${content}</span></div>`;
  };
  const erow = () => {
    const num = nextN();
    return `<div class="row">${lnSpan(num)}</div>`;
  };
  const sec = (id, label) =>
    `<div id="${id}" class="sec"><span class="sec-prefix">#</span><span class="sec-tag">${label}</span><div class="sec-line"></div></div>`;

  const esc = str => String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  let html = '';

  // ── INTRO ──────────────────────────────────────────────
  const { intro } = CONTENT;
  html += sec('intro', 'INTRO');
  intro.banner.forEach(line => {
    html += row(esc(line), 'rc-banner');
  });
  html += erow();
  html += row(`<span class="kw">commit</span> <span class="hash">${intro.hash}</span> <span class="dm">—</span> <span class="kw">whoami</span>`);
  html += row(`<span class="meta">Author:</span>&nbsp; ${esc(intro.name)} &lt;${esc(intro.email)}&gt;`);
  html += row(`<span class="meta">Where:&nbsp;</span>&nbsp; ${esc(intro.location)}`);
  html += erow();
  intro.bio.forEach(line => {
    html += row(esc(line), 'rc-indent rc-bright');
  });

  // ── BLOG ───────────────────────────────────────────────
  html += sec('blog', 'BLOG');
  html += row(`<span class="kw">tree</span> <span class="meta">blog/</span>`);
  CONTENT.blog.forEach(post => {
    html += row(
      `<a href="post.html?slug=${encodeURIComponent(post.slug)}">${esc(post.slug)}.md</a>` +
      ` <span class="dm">—</span> ${esc(post.subtitle)} <span class="meta">(${esc(post.date)})</span>`,
      'rc-indent'
    );
  });


  // ── PROJECTS ───────────────────────────────────────────
  html += sec('projects', 'PROJECTS');
  html += row(`<span class="kw">tree</span> <span class="meta">projects/</span>`);
  CONTENT.projects.forEach(p => {
    html += row(
      `${esc(p.name)} <span class="dm">—</span> ${esc(p.desc)}` +
      ` <span class="meta">[${p.tags.map(esc).join(', ')}]</span>`,
      'rc-indent'
    );
  });

  // ── TIMELINE ───────────────────────────────────────────
  html += sec('timeline', 'TIMELINE');
  CONTENT.timeline.forEach((entry, i) => {
    const isLast = i === CONTENT.timeline.length - 1;
    html += row(
      `<span class="kw">commit</span> <span class="hash">${esc(entry.hash)}</span>` +
      ` <span class="dm">—</span> <span class="kw">${esc(entry.title)}</span>` +
      ` &nbsp;<span class="dm">(${esc(entry.date)})</span>`
    );
    html += erow();
    entry.body.forEach(line => {
      html += row(esc(line), 'rc-indent');
    });
    if (!isLast) {
      const num = nextN();
      html += `<div class="row row-sep">${lnSpan(num)}</div>`;
    }
  });

  // Cursor always on the last rendered line
  const cursorN = nextN();
  html += `<div class="row"><span class="ln">${cursorN}</span><span class="rc">&nbsp;&nbsp;&nbsp;&nbsp;<span class="cursor">&nbsp;</span></span></div>`;

  pane.innerHTML = html;

  const total = n - 1;
  lineCountEl.innerHTML =
    `lines 1&ndash;${total}/${total} &nbsp;<span class="status-end">(END)</span>`;
})();
