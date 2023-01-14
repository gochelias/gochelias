import Link from 'next/link';

import { ArrowUpRight } from 'components/ArrowRight';
import { Divider } from 'components/Divider';
/* import styles from './Home.module.css'; */

export const HeaderHome = () => (
	<header className="flex h-max w-full select-none flex-col pt-4">
		<div id="top">
			<Divider />
			<div className="flex items-center justify-between py-4 pr-4 text-base uppercase leading-none">
				<h6>Frontend Development</h6>
				<h6>Backend Development</h6>
				<h6>Apps Development</h6>
				<Link
					className="transition-colors hover:text-gray3light"
					href="/contact">
					Contact
				</Link>
			</div>
			<Divider />
			<div className="flex h-40 items-center justify-between">
				<h1 className="text-6xl uppercase">
					Elias <br /> Goche
				</h1>
				{/* <button
						className="text mr-4 h-40 text-6xl uppercase"
						type="button">
						Me
						<br />
						nu
					</button> */}
			</div>
			<Divider />
		</div>
		<div className="mt-8 ml-auto w-2/3">
			<div className="w-max">
				<h4 className="mb-6 text-4xl uppercase">
					Software <br /> Developer
				</h4>
				<div className="flex items-end justify-between">
					<h6 className="text-lg uppercase leading-tight">
						Based in <br /> México
					</h6>
					<ArrowUpRight strokeWidth={3} className="m-1" />
				</div>
			</div>
			<p className="mt-16 text-[8vw] uppercase leading-none">
				Making <br /> the code an <br /> experience
			</p>
		</div>
	</header>
);
