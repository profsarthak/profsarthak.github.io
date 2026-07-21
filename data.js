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
    { id: 'projects', num: '001', name: 'Projects', desc: 'substantial things I’ve built or am building — the work, not just the code', side: 'l', kind: 'grid' },
    { id: 'experience', num: '002', name: 'Experience', desc: 'roles, fellowships, teaching', side: 'r', kind: 'list' },
    { id: 'blog', num: '003', name: 'Blog', desc: 'data-stories, thoughts & reflections', side: 'l', kind: 'grid' },
    { id: 'socials', num: '004', name: 'Socials', desc: 'where to find me', side: 'r', kind: 'tiles' },
    { id: 'repos', num: '005', name: 'Repositories', desc: 'code, data & replication', side: 'l', kind: 'list' },
  ],

  projects: [
    {
      id: 'temperaters', cat: 'WIP', ic: 'map', t: 'Temperaters',
      d: 'How much hotter one part of an Indian city runs than another — fine-scale temperature, joint with Shreyansh Dwivedy.',
      s: [['Scoping', 'phase'], ['Intra-urban', 'LST']],
      body: [
        'Shreyansh Dwivedy and I are studying how temperature varies across India at fine spatial scale. The current focus is intra-urban: how much hotter one part of a city runs than another, most likely from satellite land surface temperature, at a resolution finer than IMD’s block-level data.',
        'We are still in the literature-review phase, screening papers through a five-pool funnel — all climate-variable geospatial mapping, then temperature, then fine granularity, then within-city, then reusable method or data — before committing to an approach.',
        'An earlier plan for an interactive city-level temperature map is paused rather than abandoned; its design is preserved in the decision log and may resume once the research direction settles. The Repositories drawer has the technical detail.',
      ],
      pull: 'The map is paused, not abandoned.',
    },
    {
      id: 'news-digest', cat: 'PUBLIC DOMAIN', ic: 'newspaper', t: 'News Digest',
      d: 'A daily news reader that groups the same story across outlets into one topic, then explains it in plain English.',
      s: [['~$0.33', '/day', 'o'], ['Next.js', '+ Claude']],
      body: [
        'A personal, installable news reader. Once a day it pulls the last 24 hours from a set of outlets I choose, groups stories covering the same event into a single topic, and writes a plain-English explainer, a jargon glossary, and — for the biggest stories — web-search-backed context and implications. A separate Opinion tab curates a few op-eds with a neutral summary and which way each leans.',
        'The compile takes about two minutes, which exceeds serverless timeouts, so the work is split: a daily GitHub Actions job does the heavy lifting and writes one row per day to Neon Postgres, and Vercel serves only the lightweight reader. Next.js 16 and TypeScript, Tailwind v4, Claude Sonnet for clustering and explainers, Haiku for op-ed selection.',
        'It is a personal project built to be forked — different countries, outlets, languages, models and budgets. Nothing runs until you wire in your own API key and database.',
      ],
      pull: 'Its reader runs on this design system — the same square corners, ink borders and mono chrome as this site.',
    },
    {
      id: 'qss', cat: 'DOMAIN', ic: 'book-open', t: 'The Quantitative Social Scientist',
      d: 'An intuition-first encyclopedia for quantitative social science — probability through inference, econometrics and causal inference.',
      s: [['Live', 'site', 'o'], ['Quarto', 'authored']],
      body: [
        'An intuition-first encyclopedia for quantitative social science research: basic probability through inference, econometrics, causal inference, and the statistical-versus-predictive divide. The aim is intuition before formalism.',
        'Authored in Quarto and published to GitHub Pages at profsarthak.github.io/quant-social-scientist. The published repository is build output — the authoring project is kept separate and private.',
      ],
    },
  ],
  blog: [
    { id: 'b1', cat: 'WIP', ic: 'pen-line', t: 'Work in progress', d: 'Writing in progress — data-stories and reflections landing soon.', s: [['—', 'read'], ['—', 'date']] },
  ],
  // From the CV, most recent first. Coursework research projects are deliberately
  // not listed here — they are course output, not positions.
  experience: [
    { yr: '2026 —', t: 'Senior Analyst, Quantitative', org: 'Busara Center for Behavioural Economics · Remote', ext: 'RESEARCH' },
    { yr: '2025–26', t: 'Research Intern, Child & Maternal Nutrition', org: 'Centre for Social and Behaviour Change · Remote', ext: 'RESEARCH' },
    { yr: '2024–25', t: 'Research Assistant, Extending the “Republic of Beliefs”', org: 'Ashoka University · Remote', ext: 'RESEARCH' },
    { yr: '2025', t: 'Teaching Assistant, ECO-3704 Statistical Models', org: 'Economics Department, Ashoka University · Sonipat', ext: 'TEACHING' },
    { yr: '2025', t: 'Teaching Assistant, PSY-3059 Group Processes', org: 'Psychology Department, Ashoka University · Sonipat', ext: 'TEACHING' },
    { yr: '2024', t: 'Research Intern, Behaviour Change', org: 'Atlas of Behaviour Change in Development · New Delhi', ext: 'RESEARCH' },
    { yr: '2023–25', t: 'Head of the Consulting Unit', org: 'Ashoka University Behavioural Insights Team · Sonipat', ext: 'LEADERSHIP' },
    { yr: '2023–24', t: 'Head of the Content Team', org: 'Special Olympics Bharat, Ashoka Chapter · Sonipat', ext: 'LEADERSHIP' },
    { yr: '2023', t: 'Behavioural Science Summer Scholar', org: 'Cowry Consulting · Remote / London', ext: 'FELLOWSHIP' },
  ],
  repos: [
    { yr: '2026', t: 'news-digest', org: 'Daily PWA news reader: clusters the same story across outlets, then explains it. Next.js 16 + Claude, GitHub Actions → Neon → Vercel.', ext: '★ 0' },
    { yr: '2026', t: 'temperaters', org: 'India temperature geospatial project — intra-urban land surface temperature at finer-than-block resolution. Decision log and design specs.', ext: '★ 0' },
    { yr: '2026', t: 'exploring-benign-masochism-on-steam', org: 'R pipeline for an empirical study of why survival-crafting games, and their releases, are booming. Pre-data; literature review underway.', ext: '★ 0' },
  ],
  socials: [
    { ic: 'linkedin', n: 'LinkedIn', h: 'linkedin.com/in/sarthakvm' },
    { ic: 'git-branch', n: 'GitHub', h: 'github.com/profsarthak' },
    { ic: 'calendar', n: 'Calendly', h: 'calendly.com/sarthakvm/30-minutes' },
  ],
};