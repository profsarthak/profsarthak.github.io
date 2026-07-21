// App — router + shared chrome (status bar). Views: cabinet → section → detail.
function App() {
  const S = window.SITE;
  const [view, setView] = React.useState({
    v: 'cabinet'
  });
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
  const tab = view.id ? S.TABS.find(t => t.id === view.id) : null;
  const openSection = id => setView({
    v: 'section',
    id
  });
  const openDetail = item => setView({
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
    onOpen: openSection
  }), view.v !== 'cabinet' && tab && /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: () => view.v === 'detail' ? openSection(view.id) : setView({
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
  projects: 'Short section description goes here — a line about what lives in this drawer.',
  blog: 'Short section description goes here — a line about what lives in this drawer.',
  experience: 'Short section description goes here — a line about what lives in this drawer.',
  repos: 'Short section description goes here — a line about what lives in this drawer.',
  socials: 'Short section description goes here — a line about what lives in this drawer.'
};
window.App = App;