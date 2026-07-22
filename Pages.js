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
    }))
    /* wip cards are announcements — there's no detail page behind them. */,
    interactive: !p.wip,
    onClick: p.wip ? undefined : () => onOpen(p)
  })));
}

// --- LIST (Experience, Repos): technical rows ---
function ListPage({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, items.map((i, k) => {
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "yr"
    }, i.yr), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, i.t, i.u && /*#__PURE__*/React.createElement("i", {
      className: "ext-arw",
      "data-lucide": "arrow-up-right"
    })), /*#__PURE__*/React.createElement("div", {
      className: "org"
    }, i.org)), /*#__PURE__*/React.createElement("span", {
      className: "ext"
    }, i.ext));
    // Rows are only links where there's somewhere to go — experience has no URL.
    return i.u ? /*#__PURE__*/React.createElement("a", {
      className: "li li-link",
      key: k,
      href: i.u,
      target: "_blank",
      rel: "noopener noreferrer"
    }, inner) : /*#__PURE__*/React.createElement("div", {
      className: "li",
      key: k
    }, inner);
  }));
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
    href: i.u,
    target: "_blank",
    rel: "noopener noreferrer"
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
  // Show the stats that exist. Padding to a fixed four invented "00 metric"
  // filler, and the grid now sizes itself to the real count.
  const stats = item.s || [];
  const aside = item.meta || [];
  const links = item.links || [];
  const hasBody = item.body && item.body.length;
  // No body yet? Fall back to the card's own summary rather than lorem — an
  // entry added without prose should read thin, not fake.
  const paras = hasBody ? item.body : [item.d];
  const pull = item.pull || null;
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
  }, item.cat)), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "dstats",
    style: {
      '--dstat-n': Math.min(stats.length, 4)
    }
  }, stats.slice(0, 4).map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "c",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: 'v ' + (x[2] === 'o' ? 'o' : '')
  }, x[0]), /*#__PURE__*/React.createElement("div", {
    className: "lb"
  }, x[1])))), /*#__PURE__*/React.createElement("div", {
    className: 'dcols' + (aside.length ? '' : ' solo')
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, paras[0]), pull && /*#__PURE__*/React.createElement("div", {
    className: "pull"
  }, pull), paras.slice(1).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p)), links.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "dlinks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dlh"
  }, links.length > 1 ? 'Papers' : 'Links'), links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    className: "dl",
    key: i,
    href: l.u,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dlt"
  }, l.t, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right"
  })), l.d && /*#__PURE__*/React.createElement("span", {
    className: "dld"
  }, l.d))))), aside.length > 0 && /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "ah"
  }, "Details"), aside.map((r, i) => /*#__PURE__*/React.createElement("div", {
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