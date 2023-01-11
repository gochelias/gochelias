import Image from 'next/image';
import { ArrowUpRight } from 'components/ArrowRight';

type ProjectProps = {
	description: string;
	image: string;
	url: string;
	repo: string;
	reverse?: boolean;
};

const RecentProject = ({
	description,
	image,
	url,
	repo,
	reverse,
}: ProjectProps) => {
	const isReverse = reverse ? 'flex-row-reverse' : '';
	return (
		<div>
			<div className={`flex h-[33vh] ${isReverse}`}>
				<div className="relative h-full w-3/5 bg-[#111]">
					<Image
						className=" object-center"
						src={image}
						fill
						sizes=""
						alt=""
					/>
				</div>
				<div
					className={`m-auto flex h-full w-1/3 items-end justify-between ${isReverse}`}>
					<p className="w-2/5 text-4xl uppercase">{description}</p>
					<a href={url}>
						<ArrowUpRight size={150} />
					</a>
				</div>
			</div>
			<div
				className={`mt-4 flex w-3/5 items-center justify-between ${
					reverse ? 'ml-auto' : ''
				}`}>
				<h6 className="text-lg uppercase"> Design </h6>
				<h6 className="text-lg uppercase"> Development </h6>
				<div className="flex flex-col items-end">
					<a className="text-lg uppercase" href={repo}>
						Source Code
					</a>
					<ArrowUpRight size={12} strokeWidth={4} />
				</div>
			</div>
		</div>
	);
};

export const ProjectsSection = () => (
	<section className="my-16 w-full select-none">
		<div className="flex">
			<h2 className="flex w-max flex-col text-left text-[8vw] uppercase leading-none">
				<span>Passion</span>
				<span className="ml-96">for</span>
				<span className="ml-72">Creating</span>
			</h2>
			<div className="m-auto flex w-max flex-col items-center">
				<span className="text-[12vw]">*</span>
				<p className="text-2xl uppercase">
					Projects <br /> I am currently <br /> working on
				</p>
			</div>
		</div>
		<div className="flex h-screen flex-col justify-evenly">
			<RecentProject
				description="Lorem ipsum dolor, sit amet consectetur
									adipisicing elit."
				url=""
				repo=""
				image="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
			/>
			<RecentProject
				description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
				image="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
				url=""
				repo=""
				reverse
			/>
		</div>
	</section>
);
