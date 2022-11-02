export function SvgIcon(_ref) {
  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      title = _ref.title;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 " + size + " " + size,
    style: {
      color: color
    }
  }, title && React.createElement("title", null, title), React.createElement("use", {
    href: "/assets/icons/sprites/sprite-sheet.svg#" + type
  }));
}
//# sourceMappingURL=SvgIcon.js.map