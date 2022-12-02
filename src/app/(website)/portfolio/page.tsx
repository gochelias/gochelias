import Image from 'next/image';

const PortfolioPage = () => (
	<section className="w-full h-full flex flex-col items-center py-40 space-y-96">
		<div className="w-full h-full space-y-24">
			<div className="w-full">
				<hr className="w-full h-[1] bg-white" />
				<div className="flex space-x-8 h-24 items-center">
					<h4 className="uppercase text-2xl font-medium">tasklab</h4>
					<p className="text-lg font-['telegraf']">
						Design / Development
					</p>
				</div>
				<div className="w-full h-[50vh] relative overflow-hidden">
					<Image
						className="hover:scale-125 transition-transform duration-300"
						src="https://images.unsplash.com/photo-1545431766-45ff67845191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2225&h=620&q=80"
						fill
						sizes=""
						alt=""
					/>
				</div>
			</div>
			<div className="w-full">
				<hr className="w-full h-[1] bg-white" />
				<div className="flex space-x-8 h-24 items-center">
					<h4 className="uppercase text-2xl font-medium">watchmo</h4>
					<p className="text-lg font-['telegraf']">
						Design / Development
					</p>
				</div>
				<div className="w-full h-[50vh] relative overflow-hidden">
					<Image
						className="hover:scale-125 transition-transform duration-300"
						src="https://images.unsplash.com/photo-1548159417-f283998827c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2225&h=620&q=80"
						fill
						sizes=""
						alt=""
					/>
				</div>
			</div>
		</div>
	</section>
);

export default PortfolioPage;
