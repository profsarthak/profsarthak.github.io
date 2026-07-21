/* ============================================================
   SITE CONTENT — the file-cabinet website (all sample data)
   ------------------------------------------------------------
   ▸ HOW TO ADD A DRAWER (tab): add one object to TABS below.
       { id, num, name, desc, side:'l'|'r', kind:'grid'|'list'|'tiles' }
     Then add a matching SECTIONS entry (see App.jsx) pointing at
     its data array + kind. That's it — routing + page are automatic.
   ▸ HOW TO ADD A CARD: push an object into PROJECTS or BLOG:
       { id, cat, ic, t, d, s:[[value,label,tone?], …] }
     `ic` is any Lucide icon name. It renders in the grid AND gets
     a detail page for free. tone 'o' highlights a stat orange.
     OPTIONAL long-form (shown on the detail page):
       body: ['First paragraph (shown large).', 'Next paragraph.', …]
       pull: 'A pull-quote line.'
     Omit body/pull and the detail page shows placeholder prose.
   ▸ HOW TO ADD A LIST ROW: push into EXPERIENCE / REPOS:
       { yr, t, org, ext }
   ▸ HOW TO ADD A SOCIAL TILE: push into SOCIALS:
       { ic, n, h }
   ============================================================ */
window.SITE = {
  author: 'Sarthak Mohanty',
  role: 'Quantitative research · applied behavioural science',
  // Sits where the eyebrow used to, above the greeting on the drawer front.
  quote: 'I almost wish I hadn’t gone down that rabbit-hole—and yet—and yet—it’s rather curious, you know, this sort of life!',
  quoteCite: '— Lewis Carroll, Alice’s Adventures in Wonderland, p. 46',
  // Sentence punctuation here gets the accent colour automatically (see Cabinet).
  greeting: 'Hi! I’m Sarthak.',
  bio: 'I like understanding anything that piques my curiosity. How I understand something is by researching it. To research something, I analyze data (numeric and non-numeric alike) on it, because I believe the story data outlines can be read by anyone curious enough to look. This site is where I document my rabbit-holes.',
  stats: [],

  TABS: [
    { id: 'projects', num: '001', name: 'Projects', desc: 'long-form write-ups of what I’m building', side: 'l', kind: 'grid' },
    { id: 'experience', num: '002', name: 'Experience', desc: 'roles, fellowships, teaching', side: 'r', kind: 'list' },
    { id: 'blog', num: '003', name: 'Blog', desc: 'data-stories, thoughts & reflections', side: 'l', kind: 'grid' },
    { id: 'socials', num: '004', name: 'Socials', desc: 'where to find me', side: 'r', kind: 'tiles' },
    { id: 'repos', num: '005', name: 'Repositories', desc: 'code, data & replication', side: 'l', kind: 'list' },
  ],

  projects: [
    { id: 'p1', cat: 'CATEGORY', ic: 'file-text', t: 'Project title goes here', d: 'A one-line description of this project — what it is and why it exists.', s: [['00', 'metric', 'o'], ['00', 'metric']] },
    { id: 'p2', cat: 'CATEGORY', ic: 'box', t: 'Project title goes here', d: 'A one-line description of this project — what it is and why it exists.', s: [['00', 'metric', 'o'], ['00', 'metric']] },
    { id: 'p3', cat: 'CATEGORY', ic: 'layers', t: 'Project title goes here', d: 'A one-line description of this project — what it is and why it exists.', s: [['00', 'metric', 'o'], ['00', 'metric']] },
    { id: 'p4', cat: 'CATEGORY', ic: 'circle-dot', t: 'Project title goes here', d: 'A one-line description of this project — what it is and why it exists.', s: [['00', 'metric', 'o'], ['00', 'metric']] },
    { id: 'p5', cat: 'CATEGORY', ic: 'square-stack', t: 'Project title goes here', d: 'A one-line description of this project — what it is and why it exists.', s: [['00', 'metric', 'o'], ['00', 'metric']] },
    { id: 'p6', cat: 'CATEGORY', ic: 'triangle', t: 'Project title goes here', d: 'A one-line description of this project — what it is and why it exists.', s: [['00', 'metric', 'o'], ['00', 'metric']] },
  ],
  blog: [
    { id: 'b1', cat: 'CATEGORY', ic: 'pen-line', t: 'Post title goes here', d: 'A short standfirst for this post — one or two lines.', s: [['0 min', 'read'], ['Month', 'date']] },
    { id: 'b2', cat: 'CATEGORY', ic: 'book-open', t: 'Post title goes here', d: 'A short standfirst for this post — one or two lines.', s: [['0 min', 'read'], ['Month', 'date']] },
    { id: 'b3', cat: 'CATEGORY', ic: 'file-text', t: 'Post title goes here', d: 'A short standfirst for this post — one or two lines.', s: [['0 min', 'read', 'o'], ['Month', 'date']] },
    { id: 'b4', cat: 'CATEGORY', ic: 'quote', t: 'Post title goes here', d: 'A short standfirst for this post — one or two lines.', s: [['0 min', 'read'], ['Month', 'date']] },
    { id: 'b5', cat: 'CATEGORY', ic: 'pen-line', t: 'Post title goes here', d: 'A short standfirst for this post — one or two lines.', s: [['0 min', 'read', 'o'], ['Month', 'date']] },
    { id: 'b6', cat: 'CATEGORY', ic: 'book-open', t: 'Post title goes here', d: 'A short standfirst for this post — one or two lines.', s: [['0 min', 'read'], ['Month', 'date']] },
  ],
  experience: [
    { yr: 'YEAR', t: 'Role / position title', org: 'Organisation · place', ext: 'TYPE' },
    { yr: 'YEAR', t: 'Role / position title', org: 'Organisation · place', ext: 'TYPE' },
    { yr: 'YEAR', t: 'Role / position title', org: 'Organisation · place', ext: 'TYPE' },
    { yr: 'YEAR', t: 'Role / position title', org: 'Organisation · place', ext: 'TYPE' },
  ],
  repos: [
    { yr: '—', t: 'repository-name', org: 'A short line on what this repository does.', ext: '★ 0' },
    { yr: '—', t: 'repository-name', org: 'A short line on what this repository does.', ext: '★ 0' },
    { yr: '—', t: 'repository-name', org: 'A short line on what this repository does.', ext: '★ 0' },
    { yr: '—', t: 'repository-name', org: 'A short line on what this repository does.', ext: '★ 0' },
  ],
  socials: [
    { ic: 'link', n: 'Platform', h: '@handle' },
    { ic: 'at-sign', n: 'Platform', h: '@handle' },
    { ic: 'git-branch', n: 'Platform', h: '@handle' },
    { ic: 'book-open', n: 'Platform', h: '@handle' },
    { ic: 'mail', n: 'Platform', h: '@handle' },
    { ic: 'globe', n: 'Platform', h: '@handle' },
  ],
};