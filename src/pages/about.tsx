import { Layout } from 'components/Layout';
import { nanoid } from 'nanoid';
import { NextPage } from 'next';
import Image from 'next/image';

const AboutPage: NextPage = () => {
	const text =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis assumenda est voluptate laborum earum distinctio repellendus corporis deleniti ipsam error et.';
	const textByWord = text.split(' ');

	return (
		<Layout title="About">
			<header className="flex h-screen w-full flex-col justify-between space-y-16 py-40">
				<p className="ml-auto flex w-3/4 flex-wrap">
					<span className="my-auto ml-72 mr-14 flex items-center space-x-7">
						<hr className="h-0.5 w-24" />
						<span className="text-2xl font-normal uppercase leading-none">
							I&apos;m Elias Goche
						</span>
					</span>
					{textByWord.map((word: string) => (
						<span
							key={nanoid()}
							className="mr-4 text-6xl font-medium uppercase">
							{word}
						</span>
					))}
				</p>
				<div className="mb-48 mt-16 flex h-[50vh] w-full">
					<div className="relative h-full w-1/2">
						<Image
							className="object-cover object-top"
							src="https://images.unsplash.com/photo-1612986568842-42f75cc9e36a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
							layout="fill"
						/>
					</div>
					<div className="m-auto w-1/4">
						<p className="font-['telegraf'] text-xl text-[#eaeaea]">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ex, illum dolores. In obcaecati esse earum at
							ex temporibus ipsam impedit, est sint, sed omnis,
							explicabo non. Labore beatae eaque aut, voluptas
							nesciunt tenetur impedit asperiores eius nemo minus
							iure eum.
							<br /> <br />
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Hic illum nesciunt sequi. Tempora excepturi
							culpa dignissimos eveniet iste numquam harum earum
							perspiciatis illum aliquid!
						</p>
					</div>
				</div>
			</header>
			<section className="flex h-full w-full flex-col items-end">
				<div className="flex h-screen w-4/5 flex-col justify-center">
					<div className="flex h-96 w-full items-center justify-between">
						<h4 className="text-5xl">01</h4>
						<h2 className="text-6xl font-medium uppercase">
							Frontend <br /> development
						</h2>
						<p className="mr-16 w-1/5 font-['telegraf'] text-xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ab ullam quibusdam assumenda aliquam soluta.
						</p>
					</div>
					<div className="flex h-96 items-center justify-between border-y border-[#444]">
						<h4 className="text-5xl">02</h4>
						<h2 className="text-6xl font-medium uppercase">
							Backend <br /> development
						</h2>
						<p className="mr-16 w-1/5 font-['telegraf'] text-xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ab ullam quibusdam assumenda aliquam soluta.
						</p>
					</div>
					<div className="flex h-96 items-center justify-between border-[#666666]">
						<h4 className="text-5xl">03</h4>
						<h2 className="text-6xl font-medium uppercase">
							Apps <br /> development
						</h2>
						<p className="mr-16 w-1/5 font-['telegraf'] text-xl">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Ab ullam quibusdam assumenda aliquam soluta.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default AboutPage;
