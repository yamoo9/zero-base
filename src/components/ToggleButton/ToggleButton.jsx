import './ToggleButton.css';

export function ToggleButton({ onText, offText, on }) {
  return <button type="button">{on ? onText : offText}</button>;
}
