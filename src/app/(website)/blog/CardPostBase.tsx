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
		<div className="relative flex h-64 w-full items-center justify-center">
			<Link href={`/p/${id}`} className="h-full w-full">
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
				className="absolute top-4 left-4 flex h-8 items-center border border-white font-['telegraf'] text-base leading-none text-black">
				<span className="grid h-full min-w-max place-content-center bg-white px-3 text-center uppercase">
					Part 2
				</span>
				<span className="flex h-full w-full items-center justify-between bg-black/10 px-3 capitalize text-white backdrop-blur-xl">
					Setup
				</span>
			</Link>
		</div>
		<h4 className="mb-3 mt-5 font-[telegraf] text-base font-medium uppercase text-[#8f8f93]">
			Category
		</h4>
		<h2>
			<Link
				href={`/p/${id}`}
				className="text-3xl font-medium line-clamp-2">
				{title}
			</Link>
		</h2>
		<p className="mt-4 font-[telegraf] text-lg text-[#c7c7cc] line-clamp-3">
			{description}
		</p>
		<p className="mt-4 flex justify-between text-[#626266]">
			<span className="w-max font-['telegraf'] text-base ">
				10 min read
			</span>
			{/* <span>·</span> */}
			<span className="w-max font-['telegraf'] text-base">
				{publishedAt}
			</span>
		</p>
	</article>
);
