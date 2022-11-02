export function SpinnerAnimate({
  size = 12,
  stroke = 1.5,
  color = 'currentColor',
}) {
  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      viewBox={`0 0 ${size} ${size}`}
    >
      <g className="spinner__group">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 1}
          strokeWidth={stroke}
          fill="none"
        />
      </g>
    </svg>
  );
}
