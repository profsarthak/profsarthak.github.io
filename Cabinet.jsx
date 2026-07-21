// Cabinet — the file-drawer landing. Folder tabs fold together and pop up on
// hover; the name panel is the drawer FRONT, with side + back rails forming the
// drawer box. Tabs come from window.SITE.TABS — add one there and it appears here.
function Cabinet({ onOpen }) {
  const S = window.SITE;
  const [first, ...restName] = S.author.split(' ');
  const last = restName.join(' ');
  return (
    <div className="cab wrap">
      <div className="cab-head">
        <div>
          <div className="k">/ PERSONAL INDEX — SELECT A DRAWER</div>
          <h1>What are you<br />looking for?</h1>
        </div>
        <div className="rt">QUANTITATIVE RESEARCH<br />SOCIAL SCIENCE · APPLIED BEHAVIOURAL SCIENCE<br />DEVELOPMENT SECTOR</div>
      </div>

      <div className="drawer">
        <div className="drawerbox">
          <span className="railback"></span>
          <span className="rail l"></span>
          <span className="rail r"></span>
          <div className="folders">
            {S.TABS.map((t) => (
              <button key={t.id} className={'tab ' + t.side} onClick={() => onOpen(t.id)}>
                <span className="num">{t.num}</span>
                <span className="name">{t.name}</span>
                <span className="desc">{t.desc}</span>
                <i className="arw" data-lucide="arrow-right"></i>
              </button>
            ))}
          </div>
        </div>

        <div className="drawerfront">
          <span className="handle"></span>
          <div className="dith"><div className="d"></div></div>
          <div className="front-eb">◆ PROFSARTHAK</div>
          <h2>{first}<br />{last}<span className="p">.</span></h2>
          <p className="bio" contentEditable suppressContentEditableWarning>{S.bio}</p>
        </div>
      </div>
    </div>
  );
}
window.Cabinet = Cabinet;
