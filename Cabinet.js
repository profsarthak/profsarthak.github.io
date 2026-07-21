// Cabinet — the file-drawer landing. Folder tabs fold together and pop up on
// hover; the name panel is the drawer FRONT, with side + back rails forming the
// drawer box. Tabs come from window.SITE.TABS — add one there and it appears here.
function Cabinet({
  onOpen
}) {
  const S = window.SITE;
  const [first, ...restName] = S.author.split(' ');
  const last = restName.join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "cab wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cab-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "/ PERSONAL INDEX \u2014 SELECT A DRAWER"), /*#__PURE__*/React.createElement("h1", null, "What are you", /*#__PURE__*/React.createElement("br", null), "looking for?")), /*#__PURE__*/React.createElement("div", {
    className: "rt"
  }, "QUANTITATIVE RESEARCH", /*#__PURE__*/React.createElement("br", null), "SOCIAL SCIENCE \xB7 APPLIED BEHAVIOURAL SCIENCE", /*#__PURE__*/React.createElement("br", null), "DEVELOPMENT SECTOR")), /*#__PURE__*/React.createElement("div", {
    className: "drawer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawerbox"
  }, /*#__PURE__*/React.createElement("span", {
    className: "railback"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rail l"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rail r"
  }), /*#__PURE__*/React.createElement("div", {
    className: "folders"
  }, S.TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: 'tab ' + t.side,
    onClick: () => onOpen(t.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, t.num), /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "desc"
  }, t.desc), /*#__PURE__*/React.createElement("i", {
    className: "arw",
    "data-lucide": "arrow-right"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "drawerfront"
  }, /*#__PURE__*/React.createElement("span", {
    className: "handle"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dith"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d"
  })), /*#__PURE__*/React.createElement("div", {
    className: "front-eb"
  }, "\u25C6 PROFSARTHAK"), /*#__PURE__*/React.createElement("h2", null, first, /*#__PURE__*/React.createElement("br", null), last, /*#__PURE__*/React.createElement("span", {
    className: "p"
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "bio",
    contentEditable: true,
    suppressContentEditableWarning: true
  }, S.bio))));
}
window.Cabinet = Cabinet;