// Pages — section views (grid / list / tiles) and the card detail page.
// All compose design-system components from the bundle namespace.
const DS = () => window.SarthakVedantPersonalBrand_07ed34;

function useIcons(dep) { React.useEffect(() => { window.lucide && window.lucide.createIcons(); }); }

// --- GRID (Projects, Blog): a 3-up grid of FindingCards ---
function GridPage({ items, onOpen }) {
  const { FindingCard } = DS();
  useIcons();
  return (
    <div className="grid3">
      {items.map((p, i) => (
        <FindingCard
          key={p.id}
          category={p.cat}
          ditherAngle={200 + (i * 37) % 160}
          glyph={<i data-lucide={p.ic} style={{ width: 50, height: 50, strokeWidth: 1.5 }}></i>}
          headline={p.t}
          summary={p.d}
          stats={p.s.map((x) => ({ value: x[0], label: x[1], tone: x[2] === 'o' ? 'orange' : 'ink' }))}
          onClick={() => onOpen(p)}
        />
      ))}
    </div>
  );
}

// --- LIST (Experience, Repos): technical rows ---
function ListPage({ items }) {
  return (
    <div className="list">
      {items.map((i, k) => (
        <div className="li" key={k}>
          <span className="yr">{i.yr}</span>
          <div><h4>{i.t}</h4><div className="org">{i.org}</div></div>
          <span className="ext">{i.ext}</span>
        </div>
      ))}
    </div>
  );
}

// --- TILES (Socials): link tiles ---
function TilesPage({ items }) {
  useIcons();
  return (
    <div className="tiles">
      {items.map((i, k) => (
        <a className="tile" key={k} href="#" onClick={(e) => e.preventDefault()}>
          <i data-lucide={i.ic} style={{ width: 26, height: 26, strokeWidth: 1.5 }}></i>
          <div><div className="tn">{i.n}</div><div className="th">{i.h}</div></div>
          <div className="arw">OPEN ↗</div>
        </a>
      ))}
    </div>
  );
}

// --- DETAIL (a tapped card): dither hero + stat strip + prose + method sidebar ---
function DetailPage({ item, kind }) {
  const { DitherBlock, StatCallout } = DS();
  useIcons();
  const isProject = kind === 'projects';
  const stats = item.s.concat(isProject ? [['00', 'metric'], ['00', 'metric']] : [['—', 'detail'], ['—', 'detail']]);
  const aside = isProject
    ? [['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value']]
    : [['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value']];
  const hasBody = item.body && item.body.length;
  const paras = hasBody ? item.body : [
    'This is placeholder lead copy. Replace it with the opening of your write-up — one or two sentences that set up what this is about.',
    'Body paragraph placeholder. Replace with your own text — describe the method, the context, or the story behind this entry. Keep it as long or short as you like.',
    'Another placeholder paragraph. This is where a secondary point, a caveat, or a detail would go.',
    'A closing placeholder line — the one takeaway you want to leave the reader with.',
  ];
  const pull = item.pull || (hasBody ? null : 'A pull-quote goes here — the one line you want people to remember.');
  return (
    <div className="detail">
      <div style={{ position: 'relative' }}>
        <DitherBlock height={280} angle={250}><i data-lucide={item.ic} style={{ width: 80, height: 80, strokeWidth: 1.5 }}></i></DitherBlock>
        <span className="tagabs">{item.cat}</span>
      </div>
      <div className="dstats">
        {stats.slice(0, 4).map((x, i) => (
          <div className="c" key={i}><div className={'v ' + (x[2] === 'o' ? 'o' : '')}>{x[0]}</div><div className="lb">{x[1]}</div></div>
        ))}
      </div>
      <div className="dcols">
        <article>
          <p className="lead">{paras[0]}</p>
          {pull && <div className="pull">{pull}</div>}
          {paras.slice(1).map((p, i) => <p key={i}>{p}</p>)}
        </article>
        <aside>
          <div className="ah">{isProject ? 'Details' : 'Details'}</div>
          {aside.map((r, i) => <div className="ar" key={i}><span>{r[0]}</span><span>{r[1]}</span></div>)}
        </aside>
      </div>
    </div>
  );
}

Object.assign(window, { GridPage, ListPage, TilesPage, DetailPage });
