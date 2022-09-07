import type { NextPage } from 'next';

import styles from 'styles/Home.module.css';
import { Layout } from 'components/Layout';
import { ScrollDown } from 'components/ScrollDown';
import Image from 'next/image';

const Home: NextPage = () => (
	<Layout title="Home">
		<header className={styles.hero}>
			<h1 className="absolute left-64 z-[1] ">
				<span className="text-9xl font-medium">Elias Goche</span>
				<br />
				<span className="font-['telegraf'] text-3xl font-normal text-[#eaeaea]">
					Software Developer
				</span>
			</h1>
			<div className="flex h-5/6 w-full justify-center">
				<div className="grid h-48 w-48 place-content-center place-self-end bg-white text-black">
					<svg
						width="40"
						height="40"
						viewBox="0 0 18 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.93945 0.403906L8.73945 1.60391L14.5645 7.37891H0.814453V9.00391H14.5395L8.73945 14.7539L9.93945 15.9789L17.7145 8.17891L9.93945 0.403906Z"
							fill="currentColor"
						/>
					</svg>
				</div>
				<div className="relative z-[0] h-full w-1/4 bg-[#111]">
					<Image
						className="object-cover"
						src="https://images.unsplash.com/photo-1593990965215-075c1f918806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"
						layout="fill"
					/>
				</div>
				<div className="mr-24 grid h-96 w-24 place-content-center place-self-start bg-white text-black">
					<span className="w-max rotate-90 text-2xl font-medium">
						Available for work
					</span>
				</div>
			</div>
			<div className="absolute right-52 bottom-0 flex space-x-8">
				<div className="mt-1.5 h-4 w-[2.5px] bg-white" />
				<div className="mb-80 flex w-max flex-col items-end space-y-8">
					<p className="w-96 font-['telegraf'] text-lg text-[#fff]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ex necessitatibus iure minima fuga autem saepe aperiam
					</p>
					<button
						className="relative font-medium text-[#eaeaea] hover:underline"
						type="button">
						Read More
					</button>
				</div>
			</div>
			<ScrollDown />
		</header>
		<main className={styles.main}>main</main>
	</Layout>
);

export default Home;
