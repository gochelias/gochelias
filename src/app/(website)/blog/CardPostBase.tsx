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
	<Link href={`/p/${id}`} className="w-1/3 flex flex-col select-none">
		<span className="w-full h-64 relative">
			<Image className="object-cover" src={image} fill sizes="" alt="" />
		</span>
		<p className="uppercase font-medium text-lg mt-5 text-[#EAEAEA]">
			{publishedAt}
		</p>
		<h4 className="font-medium text-3xl">{title}</h4>
		<p className="font-[telegraf] text-lg mt-5">{description}</p>
	</Link>
);
