import { STATUS, BUTTON_NAME } from './constants.js';
import { SpinnerAnimate } from './SpinnerAnimate.js';
import { getButtonLabel, getIconName } from './utils.js';
import { SvgIcon } from '../SvgIcon.js';

export function UploadButton({
  type = 'button',
  status = 'idle',
  label,
  size,
  color,
  icon,
  disabled,
  children,
  ...restProps
}) {
  let buttonLabel = label ?? getButtonLabel(status);
  let iconName = icon ?? getIconName(status);
  let isDisabled = disabled ?? status.includes('disabled');

  if (isDisabled) iconName = BUTTON_NAME.notAllowed;

  return (
    <button
      type={type}
      className="UploadButton"
      disabled={isDisabled}
      style={color ? { color } : null}
      {...restProps}
    >
      <span className="ellipsisText">{children ?? buttonLabel}</span>
      {status !== STATUS.pending ? (
        <SvgIcon type={iconName} size={size} />
      ) : (
        <SpinnerAnimate size={size} />
      )}
    </button>
  );
}
