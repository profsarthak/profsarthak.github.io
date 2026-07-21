// App — router + shared chrome (status bar). Views: cabinet → section → detail.
function App() {
  const S = window.SITE;
  const [view, setView] = React.useState({ v: 'cabinet' });
  const [clock, setClock] = React.useState('');
  React.useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  React.useEffect(() => { window.scrollTo(0, 0); window.lucide && window.lucide.createIcons(); }, [view]);

  const tab = view.id ? S.TABS.find((t) => t.id === view.id) : null;
  const openSection = (id) => setView({ v: 'section', id });
  const openDetail = (item) => setView({ v: 'detail', id: view.id, item });

  return (
    <div>
      <div className="status"><div className="wrap">
        <div className="l"><span className="dot">◆</span><b>PROFSARTHAK</b><span className="mut">INDEX</span></div>
        <div className="r">SYS.TIME {clock} · IST UTC+5:30</div>
      </div></div>

      {view.v === 'cabinet' && <window.Cabinet onOpen={openSection} />}

      {view.v !== 'cabinet' && tab && (
        <div className="sub">
          <div className="subhead"><div className="wrap">
            <button className="back" onClick={() => view.v === 'detail' ? openSection(view.id) : setView({ v: 'cabinet' })}>
              <i data-lucide="arrow-left" style={{ width: 15, height: 15 }}></i> {view.v === 'detail' ? 'BACK TO ' + tab.name.toUpperCase() : 'BACK TO INDEX'}
            </button>
            <div className="k">{view.v === 'detail' ? view.item.cat : '/ ' + tab.num}</div>
            <h1>{view.v === 'detail' ? view.item.t : tab.name}</h1>
            <p>{view.v === 'detail' ? view.item.d : SECTION_DESC[tab.id]}</p>
          </div></div>
          <div className="wrap">
            {view.v === 'section' && tab.kind === 'grid' && <window.GridPage items={S[tab.id]} onOpen={openDetail} />}
            {view.v === 'section' && tab.kind === 'list' && <window.ListPage items={S[tab.id]} />}
            {view.v === 'section' && tab.kind === 'tiles' && <window.TilesPage items={S[tab.id]} />}
            {view.v === 'detail' && <window.DetailPage item={view.item} kind={view.id} />}
            <div className="foot"><span>© 2026 SARTHAK MOHANTY</span><span>TECHNICAL BRUTALIST · FILE-CABINET KIT</span></div>
          </div>
        </div>
      )}
    </div>
  );
}
// Per-section intro copy. Add an entry when you add a drawer.
const SECTION_DESC = {
  projects: 'Short section description goes here — a line about what lives in this drawer.',
  blog: 'Short section description goes here — a line about what lives in this drawer.',
  experience: 'Short section description goes here — a line about what lives in this drawer.',
  repos: 'Short section description goes here — a line about what lives in this drawer.',
  socials: 'Short section description goes here — a line about what lives in this drawer.',
};
window.App = App;
