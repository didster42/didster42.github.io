(() => {
  const pane = document.getElementById('pane');
  const lineCountEl = document.getElementById('line-count');
  const filenameEl = document.getElementById('post-filename');

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');

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

  const esc = str => String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (!slug) {
    pane.innerHTML = row(`<span class="meta">error: no slug specified.</span> <a href="index.html">&larr; back</a>`);
    return;
  }

  const post = CONTENT.blog.find(p => p.slug === slug);

  if (!post) {
    pane.innerHTML = row(`<span class="meta">error: post not found &mdash; ${esc(slug)}</span> <a href="index.html">&larr; back</a>`);
    return;
  }

  document.title = `${post.title} — dhruva.log`;
  if (filenameEl) filenameEl.textContent = `blog/${slug}.md`;

  let html = '';

  // Commit header
  html += row(
    `<span class="kw">commit</span> <span class="hash">${esc(post.hash)}</span>` +
    ` <span class="dm">—</span> <span class="kw">${esc(post.title)}</span>`
  );
  html += row(`<span class="meta">Date:</span>&nbsp;&nbsp;&nbsp;${esc(post.date)}`);
  html += row(`<span class="meta">Tags:</span>&nbsp;&nbsp;&nbsp;${post.tags.map(esc).join(', ')}`);
  html += erow();

  // Body blocks
  post.body.forEach(block => {
    switch (block.type) {
      case 'h2':
        html += erow();
        html += row(`<span class="post-h">${esc(block.text)}</span>`);
        break;
      case 'blockquote':
        html += erow();
        html += row(esc(block.text), 'rc-bq');
        html += erow();
        break;
      case 'p':
      default:
        html += row(esc(block.text), 'rc-indent');
        break;
    }
  });

  // Cursor always on the last rendered line
  const cursorN = nextN();
  html += `<div class="row"><span class="ln">${cursorN}</span><span class="rc">&nbsp;&nbsp;&nbsp;&nbsp;<span class="cursor">&nbsp;</span></span></div>`;

  pane.innerHTML = html;

  const total = n - 1;
  if (lineCountEl) {
    lineCountEl.innerHTML =
      `lines 1&ndash;${total}/${total} &nbsp;<span class="status-end">(END)</span>`;
  }
})();
