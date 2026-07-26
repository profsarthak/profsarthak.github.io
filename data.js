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
     `s` takes as many stats as you give it — 2, 3, 4. Nothing is
     padded, so don't invent a number to fill a slot.
     OPTIONAL long-form (shown on the detail page):
       body: ['First paragraph (shown large).', 'Next paragraph.', …]
       pull: 'A pull-quote line.'
       meta: [['Label','value'], …]   → the Details sidebar.
             Omit it and the sidebar disappears; the prose goes full width.
       links:[{ t:'Link label', u:'https://…', d:'optional one-liner' }]
             → a linked list under the prose. Used for repos, live
               sites, and the papers behind a coursework card.
       wip: true → card renders un-clickable (no detail page). For
             announcements like the blog placeholder.
   ▸ HOW TO ADD A LIST ROW: push into EXPERIENCE / REPOS:
       { yr, t, org, ext }        — REPOS also take u:'https://…'
       to make the row a link. Omit `u` and the row is plain text.
   ▸ HOW TO ADD A SOCIAL TILE: push into SOCIALS:
       { ic, n, h, u }  — `h` is the label shown, `u` the real href.
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
    { id: 'reading', num: '006', name: 'Clippings', desc: 'publications I keep coming back to', side: 'r', kind: 'list' },
  ],

  projects: [
    {
      id: 'temperaters', cat: 'WIP', ic: 'map', t: 'Temperaters',
      d: 'How much hotter one part of an Indian city runs than another — fine-scale temperature, joint with a friend.',
      s: [['Scoping', 'phase'], ['Intra-urban', 'LST']],
      meta: [['Status', 'Literature review'], ['Scale', 'Intra-urban'], ['Likely data', 'Satellite LST'], ['Region', 'India'], ['Collaboration', 'Joint, two authors']],
      links: [{ t: 'Repository', u: 'https://github.com/profsarthak/temperaters', d: 'Decision log and design specs.' }],
      body: [
        'A friend and I are studying how temperature varies across India at fine spatial scale. The current focus is intra-urban: how much hotter one part of a city runs than another, most likely from satellite land surface temperature, at a resolution finer than IMD’s block-level data.',
        'We are still in the literature-review phase, screening papers through a five-pool funnel — all climate-variable geospatial mapping, then temperature, then fine granularity, then within-city, then reusable method or data — before committing to an approach.',
        'An earlier plan for an interactive city-level temperature map is paused rather than abandoned; its design is preserved in the decision log and may resume once the research direction settles. The Repositories drawer has the technical detail.',
      ],
      pull: 'The map is paused, not abandoned.',
    },
    {
      id: 'benign-masochism', cat: 'WIP', ic: 'gamepad-2', t: 'Benign Masochism on Steam',
      d: 'Why are survival-crafting games — and the studios releasing them — booming? An empirical study of a dread-driven cascade.',
      s: [['Pre-data', 'phase'], ['Two-stage', 'design']],
      meta: [['Status', 'Pre-data · lit review'], ['Design', 'Two-stage, chained'], ['Demand', 'Within-user review share'], ['Supply', 'Genre panel · event study'], ['Data', 'Steam public reviews'], ['Stack', 'R']],
      links: [{ t: 'Repository', u: 'https://github.com/profsarthak/exploring-benign-masochism-on-steam', d: 'R pipeline, and an append-only decision log with the design rationale.' }],
      body: [
        'Why do people love survival-crafting games, and why are studios releasing so many of them? The paper follows one causal cascade: as the world feels more precarious, people cope through benign masochism — the taste for hardship you know can’t actually hurt you — and spend it on brutally hard survival games; their unusual success pulls more studios in, and the release rate accelerates.',
        'Rather than chase the whole chain with a single instrument, it splits into two stages that can each be identified on their own. The demand stage asks whether rising dread shifts consumption, measured as a within-user shift in how much of someone’s Steam reviewing goes to survival games. The supply stage asks whether that success drives entry, through a genre-level panel and event studies around breakout hits.',
        'It’s pre-data: the current deliverable is the literature review, and no pipeline has run yet. The R code, and an append-only log of every design decision and why it was made, live in the repository.',
      ],
      pull: 'Benign masochism — the taste for hardship you know can’t actually hurt you.',
    },
    {
      id: 'news-digest', cat: 'PUBLIC DOMAIN', ic: 'newspaper', t: 'News Digest',
      d: 'A daily news reader that groups the same story across outlets into one topic, then explains it in plain English.',
      s: [['~$0.33', '/day', 'o'], ['10', 'topics/day'], ['Next.js', '+ Claude']],
      meta: [['Stack', 'Next.js 16 · TypeScript'], ['Styling', 'Tailwind v4'], ['Models', 'Claude Sonnet + Haiku'], ['Store', 'Neon Postgres'], ['Host', 'Vercel'], ['Schedule', 'Daily (GitHub Actions)']],
      links: [{ t: 'Repository', u: 'https://github.com/profsarthak/news-digest', d: 'Built to be forked — wire in your own key and database.' }],
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
      s: [['149', 'articles', 'o'], ['10', 'tracks']],
      meta: [['Articles', '149'], ['Tracks', '10'], ['Format', 'Quarto'], ['Published', 'GitHub Pages'], ['Source', 'Private']],
      links: [{ t: 'Read it', u: 'https://profsarthak.github.io/quant-social-scientist/', d: 'The live encyclopedia.' }],
      body: [
        'An intuition-first encyclopedia for quantitative social science research: basic probability through inference, econometrics, causal inference, and the statistical-versus-predictive divide. The aim is intuition before formalism.',
        'One hundred and forty-nine articles across ten tracks, from an overture and foundations through inference, regression, prediction, causal inference and field realities, plus standalone tracks on complexity, dataframes and machine learning.',
        'Authored in Quarto and published to GitHub Pages. The published repository is build output — the authoring project is kept separate and private.',
      ],
    },
    // --- Coursework, grouped by theme. Each card's `links` are the papers
    // themselves, public on Drive. Co-authors are not named here; the PDFs
    // carry the full author lists.
    {
      id: 'cw-education', cat: 'COURSEWORK', ic: 'graduation-cap', t: 'Education & Learning',
      d: 'Four studies on what shapes learning — from school infrastructure and school meals to marking schemes and AI in the classroom.',
      s: [['4', 'papers'], ['2023–25', 'years']],
      meta: [['Papers', '4'], ['Methods', 'ITT · 2×2 factorial · Friedman'], ['Tools', 'R · Jamovi'], ['Institution', 'Ashoka University']],
      body: [
        'Education turns up across my coursework from two directions: as policy, asking what the state provides and whether it works, and as psychology, asking what actually happens to a student sitting an exam.',
        'The policy side looks at whether electoral competition shapes school infrastructure, and whether India’s mid-day meal scheme translated into educational attainment. The psychology side runs experiments on students directly — whether a visible marking scheme and a ticking clock change test performance, and where students draw the line on using AI in their own academic work.',
      ],
      links: [
        { t: 'Electoral Competition and Public Service Delivery', u: 'https://drive.google.com/file/d/1GkDJEPQnwCk0hPPP_buuL8ngRKDlOpO-/view', d: 'Whether electoral competition shapes educational infrastructure across Indian districts, 2010–2020. R.' },
        { t: 'Nutrition for Education', u: 'https://drive.google.com/file/d/1mJ0w-dH6o9TZoYXT7ZqMKCi5XkYK4gj8/view', d: 'Intention-to-treat analysis of the mid-day meal scheme on educational attainment, exploiting staggered state rollout in IHDS-II.' },
        { t: 'Marks, Time and Test Performance', u: 'https://drive.google.com/file/d/17lYyWDS8zkUmcw6kAYpNH45lMiFaHXuP/view', d: 'A 2×2 factorial experiment on 80 students. Neither a visible marking scheme nor time awareness mattered alone — together they did.' },
        { t: 'Attitudes towards AI in Academia', u: 'https://drive.google.com/file/d/1eh6b_vEPU-nxpLWWqdylLxBaG2WcSU0g/view', d: 'Mixed-methods study of when AI feels acceptable: fine for brainstorming and grammar, not for the thinking in between.' },
      ],
    },
    {
      id: 'cw-health-gender', cat: 'COURSEWORK', ic: 'heart-pulse', t: 'Health & Gender',
      d: 'Two studies on intimate partner violence in India — what raises a woman’s risk, and what might get it reported.',
      s: [['2', 'papers'], ['IV + RCT', 'designs']],
      meta: [['Papers', '2'], ['Methods', 'Instrumental variables · RCT design'], ['Tools', 'Stata'], ['Region', 'India · rural Bihar']],
      body: [
        'Two papers approaching intimate partner violence from opposite ends: one asking what raises exposure to it, the other asking what could make it visible.',
        'The first uses age at menarche as an instrument for age at first marriage, to estimate how marrying later changes a woman’s probability of experiencing domestic violence. The second designs a behavioural intervention for Panchayat representatives in rural Bihar — the first people a victim approaches — to raise physical-IPV reporting, with a randomised trial to evaluate it.',
      ],
      links: [
        { t: 'Delayed Marriage, Enhanced Safety', u: 'https://drive.google.com/file/d/1VIYyXL2kUvbIxFwnZTqzqwRcStomBW5m/view', d: 'IV regression on NFHS-4, instrumenting age at first marriage with age at menarche.' },
        { t: 'Pao ki Jutti Nahi, Gram ki Mazbooti Sahi', u: 'https://drive.google.com/file/d/1u7jqE5pGE2u3gw559m_gKnmJLmFUuCYo/view', d: 'A behavioural intervention to raise physical-IPV reporting in rural Bihar by shifting Panchayat representatives’ attitudes.' },
      ],
    },
    {
      id: 'cw-finance', cat: 'COURSEWORK', ic: 'trending-up', t: 'Markets & Manias',
      d: 'Three studies on how markets misbehave — investor bias, a seventeenth-century bubble, and whether price limits actually help.',
      s: [['3', 'papers'], ['1630s–now', 'span']],
      meta: [['Papers', '3'], ['Methods', 'Survey pilot · historical · empirical review'], ['Tools', 'Qualtrics · Jamovi'], ['Markets', 'Istanbul · Taiwan · Tokyo']],
      body: [
        'Three papers on the gap between how markets are supposed to behave and how they do.',
        'One runs a survey pilot on whether behavioural biases show up in undergraduates’ equity portfolio performance. One goes back to the Dutch tulip bubble of the 1630s, and finds it made of credit, honour and social networks rather than simple mania. The third asks whether the price limits exchanges impose to calm volatility instead just delay price discovery, reviewed across the Istanbul, Taiwan and Tokyo exchanges.',
      ],
      links: [
        { t: 'Behavioural Biases and Portfolio Performance', u: 'https://drive.google.com/file/d/1z0uztZt4VJm7eHC5il6nGX72CsaNrr5s/view', d: 'Survey pilot on whether behavioural biases track equity portfolio performance among undergraduates.' },
        { t: 'On Tulipmania and the Obsession', u: 'https://drive.google.com/file/d/1aIyDDR6ZspsY7P2UiOdGtAhgTbxQLPg_/view', d: 'What the 1630s Dutch tulip bubble was actually made of — credit, honour and reputation more than mania.' },
        { t: 'The Impact of Price Limits on the Stock Market', u: 'https://drive.google.com/file/d/1xyQ3nYz0HyYdn5zS7c-QOhCp9rLpGvOQ/view', d: 'Do price limits calm volatility or delay price discovery? Evidence from Istanbul, Taiwan and Tokyo.' },
      ],
    },
    {
      id: 'cw-cross-cultural', cat: 'COURSEWORK', ic: 'globe', t: 'Culture & Cognition',
      d: 'Three papers on how history and schooling leave marks on how people think, feel and assign responsibility.',
      s: [['3', 'papers'], ['Solo', 'authored']],
      meta: [['Papers', '3'], ['Course', 'Cross-Cultural Psychology'], ['Comparisons', 'India · UK/US · Sweden'], ['Authorship', 'Solo']],
      body: [
        'Three solo papers from cross-cultural psychology, each taking a difference between populations and asking what cultural mechanism produced it.',
        'The first argues that schooling, not genetics, explains why Indians educated in India and Indians educated in the UK or US diverge on analytic versus holistic cognition — two genetically similar populations, different classrooms. The second asks whether Delhi’s imperial, repeatedly-conquered history and Mumbai’s mercantile one leave measurably different levels of neuroticism. The third contrasts who is held responsible for caring for disabled adults: family in India, the state in Sweden, and the value systems behind each.',
      ],
      links: [
        { t: 'The Impact of Pedagogy on Styles of Cognition', u: 'https://drive.google.com/file/d/1lPhU7oKTQ4_QW3ig25tcQe0dJNoZUqe6/view', d: 'Why schooling, more than ancestry, separates analytic from holistic cognition in the Indian diaspora.' },
        { t: 'Of Empires and Entrepreneurs', u: 'https://drive.google.com/file/d/10hD1uYFKXPnCAhfrtEZB7okEJMXFpEQY/view', d: 'Whether Delhi’s turbulent political history and Mumbai’s commercial one show up as differences in neuroticism.' },
        { t: 'Burden of Care', u: 'https://drive.google.com/file/d/1t1UOrgE6Y2GO-xiiYs38Hn-MDlWM9lVM/view', d: 'Attribution of responsibility for disabled adults in India and Sweden — family duty against state provision.' },
      ],
    },
    {
      id: 'cw-other', cat: 'COURSEWORK', ic: 'shapes', t: 'Other Work',
      d: 'Two solo pieces that fit nowhere else — a regression on professional boxers, and an essay on names in Homer and Walcott.',
      s: [['2', 'papers'], ['Solo', 'authored']],
      meta: [['Papers', '2'], ['Methods', 'Logistic GLM · literary analysis'], ['Authorship', 'Solo']],
      body: [
        'Two papers that refuse to sit with the others.',
        'The first fits a logistic regression to professional boxers in the lower weight classes, asking whether experience and weighing in under the class limit predict win rate. Experience does, sharply; the weight differential points the right way but never reaches significance on twenty-five observations. It was written for the same statistical-models course I went on to teach.',
        'The second is a literature essay comparing how Homer’s Odyssey and Derek Walcott’s Omeros treat a name — inherited destiny in one, severed ancestry in the other.',
      ],
      links: [
        { t: 'Float like a butterfly, think like a statistician', u: 'https://drive.google.com/file/d/1-IXZ9k-fDqmigvk2YMINQP8f9O_fu0IG/view', d: 'Experience and weight differential as predictors of a boxer’s win rate, via a binomial GLM.' },
        { t: 'The Power of Names', u: 'https://drive.google.com/file/d/1SBq-x1bpPuls0YqvNXCmvh4HnOm1kK08/view', d: 'How The Odyssey and Omeros both make a name the root of identity — one inherited, one taken away.' },
      ],
    },
  ],
  blog: [
    // wip: no detail page — the card is the whole message.
    { id: 'b1', cat: 'WIP', ic: 'pen-line', t: 'Work in progress', d: 'Writing in progress — data-stories and reflections landing soon.', s: [['—', 'read'], ['—', 'date']], wip: true },
  ],
  // From the CV, most recent first. Coursework research projects are deliberately
  // not listed here — they are course output, not positions.
  experience: [
    { yr: '2026 —', t: 'Senior Analyst, Methods and Research Innovation', org: 'Busara Center for Behavioural Economics · Remote', ext: 'RESEARCH' },
    { yr: '2025–26', t: 'Research Intern, Strengthening Child and Maternal Nutrition Project', org: 'Centre for Social and Behaviour Change · Remote', ext: 'RESEARCH' },
    { yr: '2025', t: 'Teaching Assistant, ECO-3704 Statistical Models', org: 'Economics Department, Ashoka University · Sonipat', ext: 'TEACHING' },
    { yr: '2025', t: 'Teaching Assistant, PSY-3059 Group Processes', org: 'Psychology Department, Ashoka University · Sonipat', ext: 'TEACHING' },
    { yr: '2024', t: 'Research Intern, Behaviour Change', org: 'Atlas of Behaviour Change in Development · New Delhi', ext: 'RESEARCH' },
    { yr: '2023–25', t: 'Head of the Consulting Unit', org: 'Ashoka University Behavioural Insights Team · Sonipat', ext: 'LEADERSHIP' },
    { yr: '2023–24', t: 'Head of the Content Team', org: 'Special Olympics Bharat, Ashoka Chapter · Sonipat', ext: 'LEADERSHIP' },
    { yr: '2023', t: 'Behavioural Science Summer Scholar', org: 'Cowry Consulting · Remote / London', ext: 'FELLOWSHIP' },
  ],
  repos: [
    { yr: '2026', t: 'news-digest', org: 'Daily PWA news reader: clusters the same story across outlets, then explains it. Next.js 16 + Claude, GitHub Actions → Neon → Vercel.', ext: '★ 0', u: 'https://github.com/profsarthak/news-digest' },
    { yr: '2026', t: 'temperaters', org: 'India temperature geospatial project — intra-urban land surface temperature at finer-than-block resolution. Decision log and design specs.', ext: '★ 0', u: 'https://github.com/profsarthak/temperaters' },
    { yr: '2026', t: 'exploring-benign-masochism-on-steam', org: 'R pipeline for an empirical study of why survival-crafting games, and their releases, are booming. Pre-data; literature review underway.', ext: '★ 0', u: 'https://github.com/profsarthak/exploring-benign-masochism-on-steam' },
    { yr: '2026', t: 'quant-social-scientist', org: 'Rendered GitHub Pages site for The Quantitative Social Scientist — 149 articles across 10 tracks, built from a private Quarto source.', ext: '★ 0', u: 'https://github.com/profsarthak/quant-social-scientist' },
  ],
  // Clippings. `yr` carries the filing tag and `ext` the domain — the row shape
  // is the same as repos, so this needs no new component.
  // NB: the `org` lines describe what each publication IS. They are not "why I
  // read it" — swap in your own reason wherever you'd rather it be personal.
  reading: [
    { yr: 'PROGRESS', t: 'Works in Progress', org: 'Long essays on scientific and economic progress, and the institutions that produce it.', ext: 'worksinprogress.co', u: 'https://worksinprogress.co' },
    { yr: 'IDEAS', t: 'Big Think', org: 'Interviews and essays from researchers across the sciences and philosophy.', ext: 'bigthink.com', u: 'https://bigthink.com' },
    { yr: 'BEHAVIOUR', t: 'Behavioral Scientist', org: 'Non-profit magazine on behavioural science research and how it meets policy and practice.', ext: 'behavioralscientist.org', u: 'https://behavioralscientist.org' },
    { yr: 'LANGUAGE', t: 'Online Etymology Dictionary', org: 'Where English words came from, and what they used to mean before they meant this.', ext: 'etymonline.com', u: 'https://www.etymonline.com' },
    { yr: 'GAMES', t: 'Polygon', org: 'Games writing that treats the medium as culture rather than product.', ext: 'polygon.com', u: 'https://www.polygon.com' },
    { yr: 'BOXING', t: 'The Ring', org: 'Boxing’s record of itself since 1922 — rankings, reporting and the sport’s long memory.', ext: 'ringmagazine.com', u: 'https://www.ringmagazine.com' },
    { yr: 'SPORT & POWER', t: 'Sports Politika', org: 'Karim Zidan on where sport meets authoritarian politics, money and sportswashing.', ext: 'sportspolitika.news', u: 'https://www.sportspolitika.news' },
    { yr: 'INDIA', t: 'Scroll.in', org: 'Independent Indian reporting on politics, policy and the states.', ext: 'scroll.in', u: 'https://scroll.in' },
    { yr: 'INDIA', t: 'The Wire', org: 'Independent Indian public-interest journalism and investigation.', ext: 'thewire.in', u: 'https://thewire.in' },
  ],

  socials: [
    { ic: 'linkedin', n: 'LinkedIn', h: 'linkedin.com/in/sarthakvm', u: 'https://www.linkedin.com/in/sarthakvm' },
    { ic: 'git-branch', n: 'GitHub', h: 'github.com/profsarthak', u: 'https://github.com/profsarthak' },
    { ic: 'calendar', n: 'Calendly', h: 'calendly.com/sarthakvm/30-minutes', u: 'https://calendly.com/sarthakvm/30-minutes' },
  ],
};