/* @ds-bundle: {"format":4,"namespace":"SarthakVedantPersonalBrand_07ed34","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataBar","sourcePath":"components/data/DataBar.jsx"},{"name":"DitherBlock","sourcePath":"components/data/DitherBlock.jsx"},{"name":"FindingCard","sourcePath":"components/data/FindingCard.jsx"},{"name":"StatCallout","sourcePath":"components/data/StatCallout.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7a1e08ea17ee","components/core/Button.jsx":"0739bf4e282d","components/core/Card.jsx":"77085071ee08","components/core/Tag.jsx":"55ca13316f39","components/data/DataBar.jsx":"9e79f3dcea23","components/data/DitherBlock.jsx":"9cf6b5531ce0","components/data/FindingCard.jsx":"f98eaa185094","components/data/StatCallout.jsx":"f8f2b85380b3","components/forms/Input.jsx":"f4e71a147cbd","ui_kits/website/App.jsx":"fe9731de9239","ui_kits/website/Cabinet.jsx":"6a17a76323cd","ui_kits/website/Pages.jsx":"adadb33e2608","ui_kits/website/data.js":"822fdcab4766"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SarthakVedantPersonalBrand_07ed34 = window.SarthakVedantPersonalBrand_07ed34 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — mono uppercase eyebrow/kicker with an optional leading dot.
 * The "/01 SECTION" and "● FIELD EXPERIMENT" voice.
 */
function Badge({
  children,
  tone = 'orange',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    orange: 'var(--orange-600)',
    ink: 'var(--ink-900)',
    muted: 'var(--null-fg)'
  };
  const c = tones[tone] || tones.orange;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: 1,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: 0,
      background: c
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — brutalist action element. Square, 1.5px ink border, hard offset
 * shadow that the button shifts INTO on hover and settles flat on press.
 * Mono uppercase label (the technical voice).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      font: '12px'
    },
    md: {
      padding: '12px 20px',
      font: '13px'
    },
    lg: {
      padding: '15px 26px',
      font: '15px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--orange-500)',
      color: '#fff',
      borderColor: 'var(--ink-900)'
    },
    secondary: {
      background: 'var(--paper)',
      color: 'var(--ink-900)',
      borderColor: 'var(--ink-900)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      borderColor: 'transparent'
    },
    inverse: {
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      borderColor: 'var(--ink-900)'
    },
    danger: {
      background: 'var(--null-bg)',
      color: 'var(--ink-700)',
      borderColor: 'var(--ink-900)'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const hasShadow = variant !== 'ghost';
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '9px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: s.font,
      lineHeight: 1,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      padding: s.padding,
      background: v.background,
      color: v.color,
      border: `var(--bw) solid ${v.borderColor}`,
      borderRadius: 0,
      boxShadow: hasShadow ? 'var(--shadow-sm)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? '100%' : 'auto',
      transition: 'var(--transition)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled && hasShadow) {
        e.currentTarget.style.transform = 'translate(-2px,-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translate(0,0)';
      e.currentTarget.style.boxShadow = hasShadow ? 'var(--shadow-sm)' : 'none';
    },
    onMouseDown: e => {
      if (!disabled) {
        e.currentTarget.style.transform = 'translate(0,0)';
        e.currentTarget.style.boxShadow = hasShadow ? 'var(--shadow-xs)' : 'none';
      }
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — brutalist surface container. Square, hard 1.5px ink border, offset
 * shadow. Surfaces: paper (default), sage (warm), ink (inverse), sunken.
 * `interactive` shifts the card into its shadow on hover.
 */
function Card({
  children,
  surface = 'default',
  padding = 'var(--space-6)',
  interactive = false,
  shadow = true,
  style = {},
  ...rest
}) {
  const surfaces = {
    default: {
      background: 'var(--paper)',
      color: 'var(--text-body)'
    },
    warm: {
      background: 'var(--sage)',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--ink-900)',
      color: 'var(--text-on-dark)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)'
    }
  };
  const s = surfaces[surface] || surfaces.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: 'var(--bw) solid var(--ink-900)',
      borderRadius: 0,
      padding,
      boxShadow: shadow ? 'var(--shadow-card)' : 'none',
      transition: 'var(--transition)',
      cursor: interactive ? 'pointer' : 'default',
      ...s,
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translate(-3px,-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translate(0,0)';
        e.currentTarget.style.boxShadow = shadow ? 'var(--shadow-card)' : 'none';
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — square mono "data label" chip (RCT · n=40,318 · 95% CI).
 * The instrument voice. Hard border; solid fills the one you want to shout.
 */
function Tag({
  children,
  tone = 'neutral',
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--ink-700)',
      bd: 'var(--ink-900)',
      solidBg: 'var(--ink-900)',
      solidFg: 'var(--paper)'
    },
    orange: {
      fg: 'var(--orange-600)',
      bd: 'var(--orange-500)',
      solidBg: 'var(--orange-500)',
      solidFg: '#fff'
    },
    ink: {
      fg: 'var(--ink-900)',
      bd: 'var(--ink-900)',
      solidBg: 'var(--ink-900)',
      solidFg: 'var(--paper)'
    },
    null: {
      fg: 'var(--null-fg)',
      bd: 'var(--null-fg)',
      solidBg: 'var(--null-fg)',
      solidFg: 'var(--paper)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: 1,
      letterSpacing: '.06em',
      padding: '5px 9px',
      borderRadius: 0,
      color: solid ? t.solidFg : t.fg,
      background: solid ? t.solidBg : 'transparent',
      border: `var(--bw) solid ${solid ? 'transparent' : t.bd}`,
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DataBar — the signature minimal bar chart. Grey bars, one highlighted in
 * orange (the finding) or muted null. Mono axis labels. Square bars, no library.
 * data: [{ label, value, tone? }].
 */
function DataBar({
  data = [],
  height = 140,
  caption = null,
  onDark = false,
  style = {},
  ...rest
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  const toneColor = {
    default: onDark ? '#34342c' : 'var(--hair)',
    orange: 'var(--orange-500)',
    ink: onDark ? 'var(--paper)' : 'var(--ink-900)',
    null: 'var(--null-fg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '8px',
      height: `${height}px`
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${d.value / max * 100}%`,
      background: toneColor[d.tone || 'default'] || toneColor.default,
      borderRadius: 0,
      transition: 'height var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      marginTop: '9px',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--ink-500)',
      letterSpacing: '.04em',
      whiteSpace: 'nowrap'
    }
  }, d.label)))), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginTop: '14px',
      paddingTop: '12px',
      borderTop: `var(--bw) solid ${onDark ? 'var(--border-on-dark)' : 'var(--ink-900)'}`,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--ink-500)'
    }
  }, caption));
}
Object.assign(__ds_scope, { DataBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataBar.jsx", error: String((e && e.message) || e) }); }

// components/data/DitherBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DitherBlock — the signature "data-as-imagery" visual: a hot-orange panel
 * with a halftone dot mask, optionally revealing a centred icon/glyph. Stands
 * in for photography across the brand (cards, heroes, social).
 */
function DitherBlock({
  children = null,
  height = 150,
  angle = 250,
  tone = 'orange',
  style = {},
  ...rest
}) {
  const bg = tone === 'ink' ? 'var(--ink-900)' : 'var(--orange-500)';
  const dot = tone === 'ink' ? 'var(--orange-500)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      height: typeof height === 'number' ? `${height}px` : height,
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'var(--bw) solid var(--ink-900)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `radial-gradient(${dot} 30%, transparent 31%)`,
      backgroundSize: '12px 12px',
      opacity: 0.9,
      WebkitMaskImage: `linear-gradient(${angle}deg, #000, transparent 74%)`,
      maskImage: `linear-gradient(${angle}deg, #000, transparent 74%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      color: tone === 'ink' ? 'var(--paper)' : 'var(--ink-900)'
    }
  }, children));
}
Object.assign(__ds_scope, { DitherBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DitherBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/FindingCard.jsx
try { (() => {
/**
 * FindingCard — the hero content unit, matching the file-cabinet grid look:
 * a dither visual with category tag + glyph on top, headline + summary, and a
 * bordered 2-up mono stat row along the bottom. Composes Badge + DitherBlock.
 * Anchored square with a hard border; shifts into its shadow on hover.
 */
function FindingCard({
  category,
  glyph = null,
  ditherTone = 'orange',
  ditherAngle = 250,
  headline,
  summary = null,
  stats = [],
  interactive = true,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      border: 'var(--bw) solid var(--ink-900)',
      background: 'var(--paper)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-card)',
      transition: 'var(--transition)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translate(-3px,-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translate(0,0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderBottom: 'var(--bw) solid var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DitherBlock, {
    tone: ditherTone,
    angle: ditherAngle,
    height: 150,
    style: {
      border: 'none'
    }
  }, glyph), category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      background: 'var(--ink-900)',
      color: 'var(--paper)',
      padding: '4px 9px'
    }
  }, category)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: 1.12,
      letterSpacing: 'var(--ls-snug)',
      margin: 0,
      color: 'var(--ink-900)'
    }
  }, headline), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13.5px',
      lineHeight: 1.5,
      margin: '9px 0 0',
      color: 'var(--text-body)'
    }
  }, summary)), stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
      borderTop: 'var(--bw) solid var(--ink-900)',
      marginTop: '18px'
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 18px',
      borderRight: i < stats.length - 1 ? 'var(--bw) solid var(--ink-900)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '22px',
      letterSpacing: 'var(--ls-snug)',
      color: s.tone === 'orange' ? 'var(--orange-500)' : 'var(--ink-900)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)',
      marginTop: '2px'
    }
  }, s.label)))));
}
Object.assign(__ds_scope, { FindingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FindingCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCallout — a big display number with a mono label and optional detail.
 * The "one honest number" unit. tone="orange" for the headline effect;
 * tone="null" (muted) for a null / against-expectation result.
 */
function StatCallout({
  value,
  label,
  delta = null,
  tone = 'orange',
  align = 'left',
  style = {},
  ...rest
}) {
  const tones = {
    orange: 'var(--orange-500)',
    ink: 'var(--ink-900)',
    null: 'var(--null-fg)'
  };
  const c = tones[tone] || tones.orange;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: .9,
      letterSpacing: 'var(--ls-tight)',
      color: c,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), delta != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '11px',
      marginTop: '10px',
      color: 'var(--ink-500)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      fontVariantNumeric: 'tabular-nums'
    }
  }, delta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '11px',
      lineHeight: 1.4,
      color: 'var(--ink-500)',
      marginTop: delta != null ? '4px' : '10px',
      maxWidth: '220px',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, label));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCallout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — brutalist text field. Square, hard ink border, mono uppercase label,
 * orange hard focus shadow. Null-muted on error.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  affix = null,
  type = 'text',
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: '11px',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--ink-700)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--paper)',
      border: `var(--bw) solid ${error ? 'var(--null-fg)' : 'var(--ink-900)'}`,
      borderRadius: 0,
      padding: '0 13px',
      boxShadow: focused ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: '14px',
      color: 'var(--ink-900)',
      padding: '12px 0',
      ...inputStyle
    }
  }, rest)), affix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--ink-500)'
    }
  }, affix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '.03em',
      color: error ? 'var(--orange-600)' : 'var(--ink-500)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Cabinet.jsx
try { (() => {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Cabinet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
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
     OPTIONAL long-form (shown on the detail page):
       body: ['First paragraph (shown large).', 'Next paragraph.', …]
       pull: 'A pull-quote line.'
     Omit body/pull and the detail page shows placeholder prose.
   ▸ HOW TO ADD A LIST ROW: push into EXPERIENCE / REPOS:
       { yr, t, org, ext }
   ▸ HOW TO ADD A SOCIAL TILE: push into SOCIALS:
       { ic, n, h }
   ============================================================ */
window.SITE = {
  author: 'Sarthak Mohanty',
  role: 'Quantitative research · applied behavioural science',
  bio: '',
  // blank + editable in the drawer front — the user fills this in
  stats: [],
  TABS: [{
    id: 'projects',
    num: '001',
    name: 'Projects',
    desc: 'long-form write-ups of what I’m building',
    side: 'l',
    kind: 'grid'
  }, {
    id: 'experience',
    num: '002',
    name: 'Experience',
    desc: 'roles, fellowships, teaching',
    side: 'r',
    kind: 'list'
  }, {
    id: 'blog',
    num: '003',
    name: 'Blog',
    desc: 'data-stories, thoughts & reflections',
    side: 'l',
    kind: 'grid'
  }, {
    id: 'socials',
    num: '004',
    name: 'Socials',
    desc: 'where to find me',
    side: 'r',
    kind: 'tiles'
  }, {
    id: 'repos',
    num: '005',
    name: 'Repositories',
    desc: 'code, data & replication',
    side: 'l',
    kind: 'list'
  }],
  projects: [{
    id: 'p1',
    cat: 'CATEGORY',
    ic: 'file-text',
    t: 'Project title goes here',
    d: 'A one-line description of this project — what it is and why it exists.',
    s: [['00', 'metric', 'o'], ['00', 'metric']]
  }, {
    id: 'p2',
    cat: 'CATEGORY',
    ic: 'box',
    t: 'Project title goes here',
    d: 'A one-line description of this project — what it is and why it exists.',
    s: [['00', 'metric', 'o'], ['00', 'metric']]
  }, {
    id: 'p3',
    cat: 'CATEGORY',
    ic: 'layers',
    t: 'Project title goes here',
    d: 'A one-line description of this project — what it is and why it exists.',
    s: [['00', 'metric', 'o'], ['00', 'metric']]
  }, {
    id: 'p4',
    cat: 'CATEGORY',
    ic: 'circle-dot',
    t: 'Project title goes here',
    d: 'A one-line description of this project — what it is and why it exists.',
    s: [['00', 'metric', 'o'], ['00', 'metric']]
  }, {
    id: 'p5',
    cat: 'CATEGORY',
    ic: 'square-stack',
    t: 'Project title goes here',
    d: 'A one-line description of this project — what it is and why it exists.',
    s: [['00', 'metric', 'o'], ['00', 'metric']]
  }, {
    id: 'p6',
    cat: 'CATEGORY',
    ic: 'triangle',
    t: 'Project title goes here',
    d: 'A one-line description of this project — what it is and why it exists.',
    s: [['00', 'metric', 'o'], ['00', 'metric']]
  }],
  blog: [{
    id: 'b1',
    cat: 'CATEGORY',
    ic: 'pen-line',
    t: 'Post title goes here',
    d: 'A short standfirst for this post — one or two lines.',
    s: [['0 min', 'read'], ['Month', 'date']]
  }, {
    id: 'b2',
    cat: 'CATEGORY',
    ic: 'book-open',
    t: 'Post title goes here',
    d: 'A short standfirst for this post — one or two lines.',
    s: [['0 min', 'read'], ['Month', 'date']]
  }, {
    id: 'b3',
    cat: 'CATEGORY',
    ic: 'file-text',
    t: 'Post title goes here',
    d: 'A short standfirst for this post — one or two lines.',
    s: [['0 min', 'read', 'o'], ['Month', 'date']]
  }, {
    id: 'b4',
    cat: 'CATEGORY',
    ic: 'quote',
    t: 'Post title goes here',
    d: 'A short standfirst for this post — one or two lines.',
    s: [['0 min', 'read'], ['Month', 'date']]
  }, {
    id: 'b5',
    cat: 'CATEGORY',
    ic: 'pen-line',
    t: 'Post title goes here',
    d: 'A short standfirst for this post — one or two lines.',
    s: [['0 min', 'read', 'o'], ['Month', 'date']]
  }, {
    id: 'b6',
    cat: 'CATEGORY',
    ic: 'book-open',
    t: 'Post title goes here',
    d: 'A short standfirst for this post — one or two lines.',
    s: [['0 min', 'read'], ['Month', 'date']]
  }],
  experience: [{
    yr: 'YEAR',
    t: 'Role / position title',
    org: 'Organisation · place',
    ext: 'TYPE'
  }, {
    yr: 'YEAR',
    t: 'Role / position title',
    org: 'Organisation · place',
    ext: 'TYPE'
  }, {
    yr: 'YEAR',
    t: 'Role / position title',
    org: 'Organisation · place',
    ext: 'TYPE'
  }, {
    yr: 'YEAR',
    t: 'Role / position title',
    org: 'Organisation · place',
    ext: 'TYPE'
  }],
  repos: [{
    yr: '—',
    t: 'repository-name',
    org: 'A short line on what this repository does.',
    ext: '★ 0'
  }, {
    yr: '—',
    t: 'repository-name',
    org: 'A short line on what this repository does.',
    ext: '★ 0'
  }, {
    yr: '—',
    t: 'repository-name',
    org: 'A short line on what this repository does.',
    ext: '★ 0'
  }, {
    yr: '—',
    t: 'repository-name',
    org: 'A short line on what this repository does.',
    ext: '★ 0'
  }],
  socials: [{
    ic: 'link',
    n: 'Platform',
    h: '@handle'
  }, {
    ic: 'at-sign',
    n: 'Platform',
    h: '@handle'
  }, {
    ic: 'git-branch',
    n: 'Platform',
    h: '@handle'
  }, {
    ic: 'book-open',
    n: 'Platform',
    h: '@handle'
  }, {
    ic: 'mail',
    n: 'Platform',
    h: '@handle'
  }, {
    ic: 'globe',
    n: 'Platform',
    h: '@handle'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataBar = __ds_scope.DataBar;

__ds_ns.DitherBlock = __ds_scope.DitherBlock;

__ds_ns.FindingCard = __ds_scope.FindingCard;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.Input = __ds_scope.Input;

})();
