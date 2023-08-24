import Image from 'next/image';

interface ImgProps {
	src: string;
	caption?: string;
}

export default function Img({ src, caption }: ImgProps) {
	return (
		<figure className="w-full overflow-hidden">
			<Image
				className="mx-auto h-auto w-auto object-contain"
				src={src}
				width="0"
				height="0"
				alt=""
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
			{caption && (
				<figcaption className="mt-1 text-center text-sm text-gray2dark lg:text-base">
					{caption}
				</figcaption>
			)}
		</figure>
	);
}
