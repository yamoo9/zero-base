export function SvgIcon({ type, size = 12, color = 'currentColor', title }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ color }}
    >
      {title && <title>{title}</title>}
      <use href={`/assets/icons/sprites/sprite-sheet.svg#${type}`}></use>
    </svg>
  );
}
