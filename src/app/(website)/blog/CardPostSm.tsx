import Image from 'next/image';
import Link from 'next/link';
import { CardPostProps } from 'types/CardPostProps';

export const CardPostSm = ({
	id,
	image,
	title,
	description,
	publishedAt,
}: CardPostProps) => (
	<Link href={`/p/${id}`} className="w-1/4 flex flex-col select-none">
		<span className="w-full h-44 relative">
			<Image className="object-cover" src={image} fill sizes="" alt="" />
		</span>
		<p className="uppercase font-medium text-sm mt-5 mb-1">{publishedAt}</p>
		<h4 className="font-medium text-2xl">{title}</h4>
		<p className="font-[telegraf] text-lg mt-5 h-20 overflow-hidden">
			{description}
		</p>
	</Link>
);
