import Image from 'next/image';
import styles from './mdx.module.css';

type ImgProps = {
	src: string;
	caption?: string;
};

export default function Img({ src, caption }: ImgProps) {
	return (
		<figure className="w-full overflow-hidden">
			<Image
				className={styles.img}
				src={src}
				width="0"
				height="0"
				alt=""
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
			{caption && (
				<figcaption className={styles.imgCaption}>asd</figcaption>
			)}
		</figure>
	);
}
