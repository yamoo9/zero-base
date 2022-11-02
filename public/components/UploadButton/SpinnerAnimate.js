export function SpinnerAnimate(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 12 : _ref$size,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? 1.5 : _ref$stroke,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color;
  return React.createElement("svg", {
    width: size,
    height: size,
    stroke: color,
    viewBox: "0 0 " + size + " " + size
  }, React.createElement("g", {
    className: "spinner__group"
  }, React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: size / 2 - 1,
    strokeWidth: stroke,
    fill: "none"
  })));
}
//# sourceMappingURL=SpinnerAnimate.js.map