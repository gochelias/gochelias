type ArrowProps = {
	size?: number;
	strokeWidth?: number;
	className?: string;
};

export const ArrowUpRight = ({
	size = 24,
	strokeWidth = 2,
	className,
}: ArrowProps) => (
	<svg
		className={className}
		width={size}
		height={size}
		viewBox="0 0 25 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<line
			x1="23.6465"
			y1="24"
			x2="23.6465"
			y2="-0.000488325"
			stroke="currentColor"
			strokeWidth={strokeWidth.toString()}
		/>
		<line
			x1="24.6465"
			y1="1"
			x2="0.645905"
			y2="1"
			stroke="currentColor"
			strokeWidth={strokeWidth.toString()}
		/>
		<path
			d="M1.35352 23.293L23.9393 0.707184"
			stroke="currentColor"
			strokeWidth={strokeWidth.toString()}
		/>
	</svg>
);
