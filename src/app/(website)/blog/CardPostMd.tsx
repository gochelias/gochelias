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
	<Link href={`/p/${id}`} className="w-1/2 flex flex-col select-none">
		<div className="w-full h-96 relative">
			<Image className="object-cover" src={image} fill sizes="" alt="" />
		</div>
		<p className="uppercase font-medium text-xl mt-6 mb-1">{publishedAt}</p>
		<h4 className="font-medium text-5xl">{title}</h4>
		<p className="font-[telegraf] text-xl mt-6">{description}</p>
	</Link>
);
