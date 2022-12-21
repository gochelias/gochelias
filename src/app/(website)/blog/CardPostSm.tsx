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
	<Link href={`/p/${id}`} className="flex w-1/4 select-none flex-col">
		<span className="relative h-44 w-full">
			<Image className="object-cover" src={image} fill sizes="" alt="" />
		</span>
		<p className="mt-5 mb-1 text-sm font-medium uppercase">{publishedAt}</p>
		<h4 className="text-2xl font-medium">{title}</h4>
		<p className="mt-5 h-20 overflow-hidden font-[telegraf] text-lg">
			{description}
		</p>
	</Link>
);
