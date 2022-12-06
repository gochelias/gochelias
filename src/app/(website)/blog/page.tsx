import Image from 'next/image';

import { CardPostBase } from './CardPostBase';
import { CardPostMd } from './CardPostMd';
import { CardPostSm } from './CardPostSm';

const BlogPage = () => {
	const dataExp = {
		id: '1',
		image: 'https://images.unsplash.com/photo-1545431613-51ec097943c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		publishedAt: 'Sep 16, 2022',
		name: 'Lorem ipsum dolor sit amet consectetur.',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil libero incidunt perspiciatis accusamus neque eos perferendis.',
	};
	return (
		<>
			<header className="w-full h-screen flex items-center justify-center">
				<div className="w-3/5">
					<div className="w-full h-[55vh] relative">
						<Image
							className="object-cover"
							src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
							fill
							sizes=""
							alt=""
						/>
					</div>
					<h6 className="uppercase font-medium text-2xl mt-10 mb-1">
						Sep 18
					</h6>
					<h2 className="font-medium text-8xl">
						Lorem ipsum dolor sit amet consectetur.
					</h2>
					<p className="font-[telegraf] text-2xl mt-10">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Blanditiis illum exercitationem eligendi libero
						atque asperiores quos nobis? Incidunt minus dolorum
						iusto voluptatum amet, natus, molestiae debitis
						praesentium aperiam quia beatae.
					</p>
				</div>
			</header>
			<section className="w-3/5 py-40 h-full mx-auto space-y-40">
				<div className="flex gap-x-16">
					<CardPostMd
						id={dataExp.id}
						image={dataExp.image}
						title={dataExp.name}
						description={dataExp.description}
						publishedAt={dataExp.publishedAt}
					/>
				</div>
				<div className="flex gap-16">
					<CardPostBase
						id={dataExp.id}
						image={dataExp.image}
						title={dataExp.name}
						description={dataExp.description}
						publishedAt={dataExp.publishedAt}
					/>
				</div>
				<div className="flex gap-x-16">
					<CardPostSm
						id={dataExp.id}
						image={dataExp.image}
						title={dataExp.name}
						description={dataExp.description}
						publishedAt={dataExp.publishedAt}
					/>
				</div>
			</section>
		</>
	);
};

export default BlogPage;
