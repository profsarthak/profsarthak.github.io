// App — router + shared chrome (status bar). Views: cabinet → section → detail.

// The view is mirrored into the URL hash so the browser's own Back button
// walks the site instead of leaving it, and so a section or card can be linked
// to directly. Hash rather than paths: GitHub Pages has no rewrite rules, so a
// real path would 404 on refresh.
const viewToHash = v => {
  if (v.v === 'section') return '#/' + v.id;
  if (v.v === 'detail') return '#/' + v.id + '/' + v.item.id;
  return '#/';
};
const hashToView = hash => {
  const S = window.SITE;
  const parts = String(hash || '').replace(/^#\/?/, '').split('/').filter(Boolean);
  if (!parts.length) return {
    v: 'cabinet'
  };
  const tab = S.TABS.find(t => t.id === parts[0]);
  if (!tab) return {
    v: 'cabinet'
  }; // unknown drawer → home, not a blank page
  if (parts.length === 1) return {
    v: 'section',
    id: tab.id
  };
  const item = (S[tab.id] || []).find(x => x.id === parts[1]);
  // Unknown card (or one with no detail page) falls back to its section.
  return item && !item.wip ? {
    v: 'detail',
    id: tab.id,
    item
  } : {
    v: 'section',
    id: tab.id
  };
};
function App() {
  const S = window.SITE;
  // Seeded from the URL so a shared link opens on the right page.
  const [view, setView] = React.useState(() => hashToView(window.location.hash));
  // Lives here, not in Cabinet: Cabinet unmounts on navigation, so local state
  // would shut the drawer every time you came back to the index.
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [clock, setClock] = React.useState('');
  React.useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    window.lucide && window.lucide.createIcons();
  }, [view]);
  React.useEffect(() => {
    // Back/forward across hash entries fires popstate; re-read the URL as truth.
    const onPop = () => setView(hashToView(window.location.hash));
    window.addEventListener('popstate', onPop);
    // Give the first entry a hash of its own, so Back from the first section
    // returns to the cabinet rather than to whatever preceded the site.
    if (!window.location.hash) window.history.replaceState(null, '', '#/');
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const navigate = next => {
    setView(next);
    const h = viewToHash(next);
    if (window.location.hash !== h) window.history.pushState(null, '', h);
  };
  const tab = view.id ? S.TABS.find(t => t.id === view.id) : null;
  const openSection = id => navigate({
    v: 'section',
    id
  });
  const openDetail = item => navigate({
    v: 'detail',
    id: view.id,
    item
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "status"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }, "\u25C6"), /*#__PURE__*/React.createElement("b", null, "PROFSARTHAK"), /*#__PURE__*/React.createElement("span", {
    className: "mut"
  }, "INDEX")), /*#__PURE__*/React.createElement("div", {
    className: "r"
  }, "SYS.TIME ", clock, " \xB7 IST UTC+5:30"))), view.v === 'cabinet' && /*#__PURE__*/React.createElement(window.Cabinet, {
    onOpen: openSection,
    open: drawerOpen,
    onToggle: setDrawerOpen
  }), view.v !== 'cabinet' && tab && /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: () => view.v === 'detail' ? openSection(view.id) : navigate({
      v: 'cabinet'
    })
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 15,
      height: 15
    }
  }), " ", view.v === 'detail' ? 'BACK TO ' + tab.name.toUpperCase() : 'BACK TO INDEX'), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, view.v === 'detail' ? view.item.cat : '/ ' + tab.num), /*#__PURE__*/React.createElement("h1", null, view.v === 'detail' ? view.item.t : tab.name), /*#__PURE__*/React.createElement("p", null, view.v === 'detail' ? view.item.d : SECTION_DESC[tab.id]))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, view.v === 'section' && tab.kind === 'grid' && /*#__PURE__*/React.createElement(window.GridPage, {
    items: S[tab.id],
    onOpen: openDetail
  }), view.v === 'section' && tab.kind === 'list' && /*#__PURE__*/React.createElement(window.ListPage, {
    items: S[tab.id]
  }), view.v === 'section' && tab.kind === 'tiles' && /*#__PURE__*/React.createElement(window.TilesPage, {
    items: S[tab.id]
  }), view.v === 'detail' && /*#__PURE__*/React.createElement(window.DetailPage, {
    item: view.item,
    kind: view.id
  }), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 SARTHAK MOHANTY"), /*#__PURE__*/React.createElement("span", null, "TECHNICAL BRUTALIST \xB7 FILE-CABINET KIT")))));
}
// Per-section intro copy. Add an entry when you add a drawer.
const SECTION_DESC = {
  projects: 'Substantial things I’ve built or am building — the work itself, rather than the code behind it.',
  blog: 'Data-stories, thoughts and reflections. Nothing published yet — the first pieces are being written.',
  experience: 'Research, teaching and behavioural-science roles, most recent first.',
  repos: 'The raw code: pipelines, decision logs and documentation behind the projects.',
  socials: 'Where to find me, and how to get a half-hour in the diary.',
  reading: 'The publications I keep coming back to — where most of the rabbit-holes start.',
  papers: 'Research write-ups, mostly coursework from my degree — across economics, psychology, gender, finance and culture. Published work will land here as it comes.'
};
window.App = App;