import Link from 'next/link';
import { Logo } from 'components/Logo';

export const Nav = () => (
	<nav className="relative z-10 flex select-none justify-between">
		<Link href="/">
			<a>
				<Logo className="w-5 md:w-6 2xl:w-8" />
			</a>
		</Link>
		<button type="button" className="text-sm uppercase">
			menu
		</button>
	</nav>
);
