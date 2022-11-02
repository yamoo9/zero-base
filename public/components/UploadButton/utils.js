import { STATUS, BUTTON_NAME, BUTTON_LABEL } from './constants.js';
export function getButtonLabel(status) {
  switch (status) {
    case STATUS.idle:
    case STATUS.disabled:
      return BUTTON_LABEL.idle_or_disabled;

    case STATUS.pending:
      return BUTTON_LABEL.pending;

    case STATUS.resolved:
      return BUTTON_LABEL.resolved;

    case STATUS.rejected:
      return BUTTON_LABEL.rejected;

    default:
      return false;
  }
}
export function getIconName(status) {
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
//# sourceMappingURL=utils.js.map