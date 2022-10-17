import Link from 'next/link';

import { Logo } from 'components/Logo';

type NavProps = {
	pageTitle?: string;
};

export const Nav = ({ pageTitle }: NavProps) => (
	<nav className="fixed z-10 flex w-full select-none bg-gradient-to-b from-black to-transparent">
		{/* <span className='px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8 2xl:px-16 2xl:py-16'></span> */}
		<Link href="/">
			<a
				className="grid w-40 place-content-center p-16 duration-100 hover:bg-white hover:text-black"
				title="Go to home">
				<Logo className="w-5 md:w-6 2xl:w-8" />
			</a>
		</Link>
		<div className="flex items-center space-x-6">
			<hr className="h-[1px] w-24 bg-white" />
			<h4 className="text-2xl font-medium uppercase" title="You are here">
				{pageTitle || 'Not Found'}
			</h4>
		</div>
		<button
			type="button"
			className="ml-auto h-40 place-content-center px-16 text-base font-semibold uppercase duration-100 hover:bg-white hover:text-black">
			Menu
		</button>
	</nav>
);
