import { CardPostBase } from './CardPostBase';
import { CardPostSm } from './CardPostSm';
import { CardPostMain } from './CardPostMain';

const BlogPage = () => {
	const dataExp = {
		id: '#',
		image: 'https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
		category: 'Category',
		title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil libero incidunt perspiciatis accusamus neque eos perferendis.',
		publishedAt: 'Sep 16, 2022',
		readingTime: '10 min read',
	};
	return (
		<main className="flex flex-col items-center">
			<section className="flex h-screen w-3/5 flex-col items-center justify-center">
				<hr className="mb-32 h-[1px] w-full border-none bg-gray4dark" />
				<div className="grid h-max grid-cols-4 gap-x-16 gap-y-20">
					<CardPostMain
						id={dataExp.id}
						image={dataExp.image}
						category={dataExp.category}
						title={dataExp.title}
						description={dataExp.description}
						publishedAt={dataExp.publishedAt}
						readingTime={dataExp.readingTime}
					/>
					<div className="col-span-1 grid grid-cols-1 gap-y-28">
						<CardPostSm
							id={dataExp.id}
							image={dataExp.image}
							category={dataExp.category}
							title={dataExp.title}
							description={dataExp.description}
							publishedAt={dataExp.publishedAt}
							readingTime={dataExp.readingTime}
						/>
						<CardPostSm
							id={dataExp.id}
							image={dataExp.image}
							category={dataExp.category}
							title={dataExp.title}
							description={dataExp.description}
							publishedAt={dataExp.publishedAt}
							readingTime={dataExp.readingTime}
						/>
					</div>
				</div>
			</section>
			<section className="h-full w-3/5 space-y-32 pb-32">
				<hr className="h-[1px] w-full border-none bg-gray4dark" />
				<div className="grid grid-cols-3 gap-x-20 gap-y-32 ">
					<CardPostBase
						id={dataExp.id}
						image={dataExp.image}
						category={dataExp.category}
						title={dataExp.title}
						description={dataExp.description}
						publishedAt={dataExp.publishedAt}
						readingTime={dataExp.readingTime}
					/>
					<CardPostBase
						id={dataExp.id}
						image={dataExp.image}
						category={dataExp.category}
						title={dataExp.title}
						description={dataExp.description}
						publishedAt={dataExp.publishedAt}
						readingTime={dataExp.readingTime}
					/>
				</div>
			</section>
		</main>
	);
};

export default BlogPage;
