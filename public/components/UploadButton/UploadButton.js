var _excluded = ["type", "status", "label", "size", "color", "icon", "disabled", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { STATUS, BUTTON_NAME } from './constants.js';
import { SpinnerAnimate } from './SpinnerAnimate.js';
import { getButtonLabel, getIconName } from './utils.js';
import { SvgIcon } from '../SvgIcon.js';
export function UploadButton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'idle' : _ref$status,
      label = _ref.label,
      size = _ref.size,
      color = _ref.color,
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
    disabled: isDisabled,
    style: color ? {
      color: color
    } : null
  }, restProps), React.createElement("span", {
    className: "ellipsisText"
  }, children != null ? children : buttonLabel), status !== STATUS.pending ? React.createElement(SvgIcon, {
    type: iconName,
    size: size
  }) : React.createElement(SpinnerAnimate, {
    size: size
  }));
}
//# sourceMappingURL=UploadButton.js.map