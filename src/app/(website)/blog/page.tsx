import Image from 'next/image';

const BlogPage = () => (
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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Blanditiis illum exercitationem eligendi libero atque
					asperiores quos nobis? Incidunt minus dolorum iusto
					voluptatum amet, natus, molestiae debitis praesentium
					aperiam quia beatae.
				</p>
			</div>
		</header>
		<section className="w-3/5 py-40 h-full mx-auto space-y-40">
			<div className="flex gap-x-16">
				<div className="w-1/2">
					<div className="w-full h-96 relative">
						<Image
							className="object-cover"
							src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
							fill
							sizes=""
							alt=""
						/>
					</div>
					<h6 className="uppercase font-medium text-xl mt-6 mb-1">
						Sep 18
					</h6>
					<h4 className="font-medium text-5xl">
						Lorem ipsum dolor sit amet consectetur.
					</h4>
					<p className="font-[telegraf] text-xl mt-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eveniet nihil libero incidunt perspiciatis accusamus
						neque eos perferendis.
					</p>
				</div>
			</div>
			<div className="flex gap-16">
				<div className="w-1/3">
					<div className="w-full h-64 relative">
						<Image
							className="object-cover"
							src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
							fill
							sizes=""
							alt=""
						/>
					</div>
					<h6 className="uppercase font-medium text-lg mt-5">
						Sep 18
					</h6>
					<h4 className="font-medium text-3xl">
						Lorem ipsum dolor sit amet consectetur.
					</h4>
					<p className="font-[telegraf] text-lg mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eveniet nihil libero incidunt perspiciatis accu samus
						neque eos perferendis.
					</p>
				</div>
			</div>
			<div className="flex gap-x-16">
				<div className="w-1/5">
					<div className="w-full h-40 relative">
						<Image
							className="object-cover"
							src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
							fill
							sizes=""
							alt=""
						/>
					</div>
					<h6 className="uppercase font-medium text-sm mt-5 mb-1">
						Sep 18
					</h6>
					<h4 className="font-medium text-2xl">
						Lorem ipsum dolor sit amet consectetur.
					</h4>
					<p className="font-[telegraf] text-lg mt-5 h-20 overflow-hidden">
						Lorem ipsum dolor sit amet con sectetur adipisicing
						elit. Eveniet nihil libero incidunt perspiciatis
					</p>
				</div>
			</div>
		</section>
	</>
);

export default BlogPage;
