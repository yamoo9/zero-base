import './ToggleButton.css';

export function ToggleButton(props) {
  return <div>{props.on ? props.onText : props.offText}</div>;
}
