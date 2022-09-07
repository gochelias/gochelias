import Link from 'next/link';

export const Nav = () => (
	<nav className="relative z-10 flex select-none justify-between">
		<Link href="/">
			<a>
				<svg
					className=""
					width="26"
					height="26"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.16935 20.56C11.7481 20.56 13.4757 18.976 14.0434 16.864H14.2408V20.32H17.6715V11.824H8.36679V14.488H13.9693C13.8706 16.528 12.7106 17.104 8.90977 17.104C5.28169 17.104 3.92425 15.856 3.92425 12.28C3.92425 8.704 5.33105 7.456 9.08254 7.456C12.2664 7.456 13.5251 8.344 13.5251 10.216V10.408H17.6468V10.216C17.6468 6.352 14.3642 4 9.18126 4C3.50467 4 0 7.264 0 12.28C0 17.296 3.10978 20.56 8.16935 20.56ZM24 20.32V16.12H19.2366V20.32H24Z"
						fill="currentColor"
					/>
				</svg>
			</a>
		</Link>
		<button type="button" className="text-sm uppercase">
			menu
		</button>
	</nav>
);
