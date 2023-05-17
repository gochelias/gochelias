import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
};

export default function BlogPage() {
	return (
		<section className="mx-auto flex w-3/5 flex-col items-center space-y-8 border-red-500 pb-64">
			<header className="flex w-full items-center justify-center py-40">
				<h1 className="text-[8vw] uppercase">Blog</h1>
			</header>
			{/* <div className="grid w-full grid-cols-3 gap-x-8 gap-y-16">

			</div> */}
		</section>
	);
}
