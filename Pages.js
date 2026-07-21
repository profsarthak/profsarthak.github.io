// Pages — section views (grid / list / tiles) and the card detail page.
// All compose design-system components from the bundle namespace.
const DS = () => window.SarthakVedantPersonalBrand_07ed34;
function useIcons(dep) {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
}

// --- GRID (Projects, Blog): a 3-up grid of FindingCards ---
function GridPage({
  items,
  onOpen
}) {
  const {
    FindingCard
  } = DS();
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    className: "grid3"
  }, items.map((p, i) => /*#__PURE__*/React.createElement(FindingCard, {
    key: p.id,
    category: p.cat,
    ditherAngle: 200 + i * 37 % 160,
    glyph: /*#__PURE__*/React.createElement("i", {
      "data-lucide": p.ic,
      style: {
        width: 50,
        height: 50,
        strokeWidth: 1.5
      }
    }),
    headline: p.t,
    summary: p.d,
    stats: p.s.map(x => ({
      value: x[0],
      label: x[1],
      tone: x[2] === 'o' ? 'orange' : 'ink'
    })),
    onClick: () => onOpen(p)
  })));
}

// --- LIST (Experience, Repos): technical rows ---
function ListPage({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, items.map((i, k) => /*#__PURE__*/React.createElement("div", {
    className: "li",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, i.yr), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, i.t), /*#__PURE__*/React.createElement("div", {
    className: "org"
  }, i.org)), /*#__PURE__*/React.createElement("span", {
    className: "ext"
  }, i.ext))));
}

// --- TILES (Socials): link tiles ---
function TilesPage({
  items
}) {
  useIcons();
  return /*#__PURE__*/React.createElement("div", {
    className: "tiles"
  }, items.map((i, k) => /*#__PURE__*/React.createElement("a", {
    className: "tile",
    key: k,
    href: "#",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": i.ic,
    style: {
      width: 26,
      height: 26,
      strokeWidth: 1.5
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tn"
  }, i.n), /*#__PURE__*/React.createElement("div", {
    className: "th"
  }, i.h)), /*#__PURE__*/React.createElement("div", {
    className: "arw"
  }, "OPEN \u2197"))));
}

// --- DETAIL (a tapped card): dither hero + stat strip + prose + method sidebar ---
function DetailPage({
  item,
  kind
}) {
  const {
    DitherBlock,
    StatCallout
  } = DS();
  useIcons();
  const isProject = kind === 'projects';
  const stats = item.s.concat(isProject ? [['00', 'metric'], ['00', 'metric']] : [['—', 'detail'], ['—', 'detail']]);
  const aside = isProject ? [['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value']] : [['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value'], ['LABEL', 'value']];
  const hasBody = item.body && item.body.length;
  const paras = hasBody ? item.body : ['This is placeholder lead copy. Replace it with the opening of your write-up — one or two sentences that set up what this is about.', 'Body paragraph placeholder. Replace with your own text — describe the method, the context, or the story behind this entry. Keep it as long or short as you like.', 'Another placeholder paragraph. This is where a secondary point, a caveat, or a detail would go.', 'A closing placeholder line — the one takeaway you want to leave the reader with.'];
  const pull = item.pull || (hasBody ? null : 'A pull-quote goes here — the one line you want people to remember.');
  return /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(DitherBlock, {
    height: 280,
    angle: 250
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": item.ic,
    style: {
      width: 80,
      height: 80,
      strokeWidth: 1.5
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "tagabs"
  }, item.cat)), /*#__PURE__*/React.createElement("div", {
    className: "dstats"
  }, stats.slice(0, 4).map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "c",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: 'v ' + (x[2] === 'o' ? 'o' : '')
  }, x[0]), /*#__PURE__*/React.createElement("div", {
    className: "lb"
  }, x[1])))), /*#__PURE__*/React.createElement("div", {
    className: "dcols"
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, paras[0]), pull && /*#__PURE__*/React.createElement("div", {
    className: "pull"
  }, pull), paras.slice(1).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "ah"
  }, isProject ? 'Details' : 'Details'), aside.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "ar",
    key: i
  }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]))))));
}
Object.assign(window, {
  GridPage,
  ListPage,
  TilesPage,
  DetailPage
});