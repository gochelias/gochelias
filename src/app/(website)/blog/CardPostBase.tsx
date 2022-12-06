/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

import { CardPostProps } from 'types/CardPostProps';

export const CardPostBase = ({
	id,
	image,
	title,
	description,
	publishedAt,
}: CardPostProps) => (
	<article className="w-1/3 select-none">
		<div className="w-full h-64 relative flex items-center justify-center">
			<Link href={`/p/${id}`} className="w-full h-full">
				<Image
					className="object-cover"
					src={image}
					fill
					sizes=""
					alt=""
				/>
			</Link>
			<Link
				href="/p/2"
				className="text-base  font-['telegraf'] border border-white absolute h-8 flex items-center leading-none top-4 left-4 text-black">
				<span className="bg-white px-3 uppercase min-w-max text-center grid place-content-center h-full">
					Part 2
				</span>
				<span className="px-3 h-full w-full flex items-center justify-between bg-black/10 backdrop-blur-xl text-white capitalize">
					Setup
				</span>
			</Link>
		</div>
		<h4 className="font-medium uppercase font-['telegraf'] mt-5 text-base mb-3 text-[#8f8f93]">
			tutorial
		</h4>
		<h2>
			<Link href={`/p/${id}`} className="font-medium text-3xl">
				{title}
			</Link>
		</h2>
		<p className="font-[telegraf] text-lg mt-5 text-[#c7c7cc]">
			{description}
		</p>
		<p className="flex mt-5 justify-between text-[#626266]">
			<span className="text-base font-['telegraf'] w-max ">
				10 min read
			</span>
			{/* <span>·</span> */}
			<span className="text-base font-['telegraf'] w-max">
				{publishedAt}
			</span>
		</p>
	</article>
);
