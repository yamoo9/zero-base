import './ToggleButton.css';

export function ToggleButton({ onText, offText, on, onToggle }) {
  return (
    <button
      type="button"
      className={`ToggleButton ${on ? 'ToggleButton--on' : ''}`.trim()}
      onClick={onToggle}
    >
      {on ? onText : offText}
    </button>
  );
}
