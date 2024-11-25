interface CircularLoadingProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const Loader: React.FC<CircularLoadingProps> = ({
  size = 40,
  strokeWidth = 4,
  color = "hsl(var(--accent))",
}) => {
  return (
    <div className="inline-flex items-center justify-center">
      <div className="relative">
        <svg
          className="animate-spin"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="opacity-25"
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            className="opacity-75"
            cx={size / 2}
            cy={size / 2}
            r={(size - strokeWidth) / 2}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={size * Math.PI * 0.75}
            strokeLinecap="round"
            fill="none">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${size / 2} ${size / 2}`}
              to={`360 ${size / 2} ${size / 2}`}
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export { Loader };
