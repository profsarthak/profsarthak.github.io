// Cabinet — the file-drawer landing. The drawer starts shut; pulling the handle
// slides the folder tabs up out of the box. Tabs fold together and pop up on
// hover; the name panel is the drawer FRONT, with side + back rails forming the
// drawer box. Tabs come from window.SITE.TABS — add one there and it appears here.
// Wraps sentence punctuation so it can carry the accent colour. Apostrophes are
// deliberately excluded — colouring the one inside "I'm" just reads as a typo.
const accentPunct = s => s.split(/([!?.,;:—])/).map((part, i) => /^[!?.,;:—]$/.test(part) ? /*#__PURE__*/React.createElement("span", {
  className: "p",
  key: i
}, part) : part);
function Cabinet({
  onOpen,
  open,
  onToggle
}) {
  const S = window.SITE;
  return /*#__PURE__*/React.createElement("div", {
    className: "cab wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cab-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "/ PERSONAL INDEX \u2014 SELECT A DRAWER"), /*#__PURE__*/React.createElement("p", {
    className: "q"
  }, "What are you looking for?")), /*#__PURE__*/React.createElement("div", {
    className: "rt"
  }, "QUANTITATIVE RESEARCH", /*#__PURE__*/React.createElement("br", null), "SOCIAL SCIENCE \xB7 APPLIED BEHAVIOURAL SCIENCE")), /*#__PURE__*/React.createElement("div", {
    className: 'drawer' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawerbox"
  }, /*#__PURE__*/React.createElement("span", {
    className: "railback"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rail l"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rail r"
  }), /*#__PURE__*/React.createElement("div", {
    className: "folders-clip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "folders-inner",
    id: "cab-folders",
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("nav", {
    className: "folders",
    "aria-label": "Site sections"
  }, S.TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: 'tab ' + t.side,
    onClick: () => onOpen(t.id)
    /* Clipped tabs stay in the tab order otherwise, handing
       keyboard users invisible targets while the drawer is shut. */,
    tabIndex: open ? 0 : -1
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, t.num), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, t.desc), /*#__PURE__*/React.createElement("i", {
    className: "arw",
    "data-lucide": "arrow-right"
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "drawerfront"
  }, /*#__PURE__*/React.createElement("button", {
    className: "handle",
    onClick: () => onToggle(!open),
    "aria-expanded": open,
    "aria-controls": "cab-folders"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grip"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, open ? 'PUSH TO CLOSE' : 'PULL TO OPEN')), /*#__PURE__*/React.createElement("div", {
    className: "dith"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d"
  })), /*#__PURE__*/React.createElement("p", {
    className: "front-quote"
  }, S.quote, /*#__PURE__*/React.createElement("span", {
    className: "front-cite"
  }, S.quoteCite)), /*#__PURE__*/React.createElement("h1", null, accentPunct(S.greeting)), /*#__PURE__*/React.createElement("p", {
    className: "bio"
  }, S.bio))));
}
window.Cabinet = Cabinet;