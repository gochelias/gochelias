import ClashArrowIcon from 'icons/ClashArrowIcon';
import GitHubIcon from 'icons/GitHubIcon';
import Image from 'next/image';

const PortfolioPage = () => (
	<section className="w-full h-full flex flex-col items-center py-40 space-y-96">
		<div className="w-full h-full space-y-16">
			<div className="w-full h-[50vh] relative">
				<Image
					className=""
					src="https://images.unsplash.com/photo-1545431766-45ff67845191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
					fill
					sizes=""
					alt=""
				/>
			</div>
			<hr className="w-full h-[1] bg-white" />
			<div className="flex justify-between">
				<div className="w-1/3">
					<h4 className="font-semibold text-xl uppercase">tasklab</h4>
				</div>
				<div className=" space-y-16 w-3/5">
					<p className="font-['telegraf'] text-4xl">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Harum sed ipsa adipisci! Aliquid voluptas maxime
						similique dolor dicta omnis quo. Nisi ipsa ex incidunt
						ratione eveniet at ducimus nostrum numquam eaque cumque
						ab omnis quam quae rerum porro aliquid sed ipsam vero,
						error laboriosam autem, excepturi a. Dignissimos,
						laborum velit!
					</p>
					<div className="space-y-16">
						<a
							href="#"
							className="w-full h-40 flex bg-black px-16 text-white text-5xl font-medium items-center border-2 border-white hover:bg-black hover:text-white">
							<GitHubIcon className="w-16 mr-8" />
							<span>Website</span>
							<ClashArrowIcon className="w-12 ml-auto" />
						</a>
						<a
							href="#"
							className="w-full h-40 flex bg-black px-16 text-white text-5xl font-medium items-center border-2 border-white hover:bg-black hover:text-white">
							<GitHubIcon className="w-16 mr-8" />
							<span>GitHub</span>
							<ClashArrowIcon className="w-12 ml-auto" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default PortfolioPage;
