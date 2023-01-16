import Link from 'next/link';

import { ArrowUpRight } from 'components/ArrowRight';
import { Divider } from 'components/Divider';
import styles from './Home.module.css';

export const HeaderHome = () => (
	<header className={styles.header}>
		<div id="top">
			<Divider />
			<div className={styles.headerList}>
				<h6 className={styles.headerListItems}>Frontend </h6>
				<h6 className={styles.headerListItems}>Backend </h6>
				<h6 className={styles.headerListItems}>Apps </h6>
				<Link className={styles.headerListContact} href="/contact">
					Contact
				</Link>
			</div>
			<Divider />
			<div className={styles.headerNavbar}>
				<h1 className={styles.headerName}>
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
		<div className={styles.headerCenter}>
			<div className="w-max">
				<h4 className={styles.headerDev}>
					Software <br /> Developer
				</h4>
				<div className="flex items-end justify-between">
					<h6 className={styles.headerBased}>
						Based in <br /> México
					</h6>
					<ArrowUpRight
						strokeWidth={3}
						className="m-1 rotate-90 p-1 2xl:p-0"
					/>
				</div>
			</div>
			<p className={styles.headerMainText}>
				Making <br /> the code an <br /> experience
			</p>
		</div>
	</header>
);
