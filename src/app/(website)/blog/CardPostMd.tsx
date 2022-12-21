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
	<article className="w-1/2 flex flex-col select-none">
		<div className="w-full h-96 relative">
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
				className="text-lg font-[telegraf] border border-white absolute h-10 flex leading-none top-5 left-5 text-black">
				<span className="bg-white px-4 uppercase min-w-max text-center flex items-center h-full">
					Part 2
				</span>
				<span className="px-4 h-full w-full flex items-center justify-between bg-black/10 backdrop-blur-xl text-white capitalize">
					Setup
				</span>
			</Link>
		</div>
		<h4 className="font-medium uppercase font-[telegraf] text-lg text-[#8f8f93] mb-4 mt-5">
			Category
		</h4>
		<h2 className="font-medium text-5xl line-clamp-2">{title}</h2>
		<p className="font-[telegraf] text-xl mt-5 text-[#c7c7cc] line-clamp-2">
			{description}
		</p>
		<p className="flex mt-5 justify-between text-[#626266]">
			<span className="text-lg font-['telegraf'] w-max ">
				10 min read
			</span>
			{/* <span>·</span> */}
			<span className="text-lg font-['telegraf'] w-max">
				{publishedAt}
			</span>
		</p>
	</article>
);
