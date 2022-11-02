var _excluded = ["type", "status", "label", "size", "icon", "disabled", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { SvgIcon } from './SvgIcon.js';
var STATUS = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
  disabled: 'disabled'
};
var BUTTON_NAME = {
  upArrow: 'up-arrow',
  spinner: 'spinner',
  checkMark: 'check-mark',
  cross: 'cross',
  notAllowed: 'not-allowed'
};
export function UploadButton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'idle' : _ref$status,
      label = _ref.label,
      size = _ref.size,
      icon = _ref.icon,
      disabled = _ref.disabled,
      children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var buttonLabel = label != null ? label : getButtonLabel(status);
  var iconName = icon != null ? icon : getIconName(status);
  var isDisabled = disabled != null ? disabled : status.includes('disabled');
  if (isDisabled) iconName = BUTTON_NAME.notAllowed;
  return React.createElement("button", _extends({
    type: type,
    className: "UploadButton",
    disabled: isDisabled
  }, restProps), children != null ? children : buttonLabel, status !== STATUS.pending ? React.createElement(SvgIcon, {
    type: iconName,
    size: size
  }) : React.createElement(SpinnerAnimate, {
    size: size
  }));
}

function SpinnerAnimate(_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 12 : _ref2$size,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'currentColor' : _ref2$color;
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
    fill: "none",
    strokeWidth: "1.5"
  })));
}

function getButtonLabel(status) {
  switch (status) {
    case STATUS.idle:
    case STATUS.disabled:
      return '업로드';

    case STATUS.pending:
      return '업로드 중';

    case STATUS.resolved:
      return '완료';

    case STATUS.rejected:
      return '실패';

    default:
      return false;
  }
}

function getIconName(status) {
  switch (status) {
    case STATUS.idle:
      return BUTTON_NAME.upArrow;

    case STATUS.pending:
      return BUTTON_NAME.spinner;

    case STATUS.resolved:
      return BUTTON_NAME.checkMark;

    case STATUS.rejected:
      return BUTTON_NAME.cross;

    case STATUS.disabled:
      return BUTTON_NAME.notAllowed;
  }
}
//# sourceMappingURL=UploadButton.js.map