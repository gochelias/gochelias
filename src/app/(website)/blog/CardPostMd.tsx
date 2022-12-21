import Image from 'next/image';
import Link from 'next/link';
import { CardPostProps } from 'types/CardPostProps';

export const CardPostMd = ({
	id,
	image,
	title,
	description,
	publishedAt,
}: CardPostProps) => (
	<article className="flex w-1/2 select-none flex-col">
		<div className="relative h-96 w-full">
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
				className="absolute top-5 left-5 flex h-10 border border-white font-[telegraf] text-lg leading-none text-black">
				<span className="flex h-full min-w-max items-center bg-white px-4 text-center uppercase">
					Part 2
				</span>
				<span className="flex h-full w-full items-center justify-between bg-black/10 px-4 capitalize text-white backdrop-blur-xl">
					Setup
				</span>
			</Link>
		</div>
		<h4 className="mb-4 mt-5 font-[telegraf] text-lg font-medium uppercase text-[#8f8f93]">
			Category
		</h4>
		<h2 className="text-5xl font-medium line-clamp-2">{title}</h2>
		<p className="mt-5 font-[telegraf] text-xl text-[#c7c7cc] line-clamp-2">
			{description}
		</p>
		<p className="mt-5 flex justify-between text-[#626266]">
			<span className="w-max font-['telegraf'] text-lg ">
				10 min read
			</span>
			{/* <span>·</span> */}
			<span className="w-max font-['telegraf'] text-lg">
				{publishedAt}
			</span>
		</p>
	</article>
);
