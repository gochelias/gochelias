import { ArrowUpRight } from 'components/ArrowRight';
import Image from 'next/image';

export const AboutSection = () => {
	const image =
		'https://images.unsplash.com/photo-1626624158360-8cb69be9b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80';

	return (
		<section className="mt-16 ml-auto h-[65vh] w-4/5">
			<div className="relative h-[33vh] w-full bg-gray6dark">
				<Image
					className="center-img object-cover"
					fill
					src={image}
					alt=""
				/>
			</div>
			<div className="ml-auto flex w-full flex-col">
				<div className="mt-4 flex flex-col items-end space-x-4">
					<a className="text-lg uppercase" href="#">
						Read More
					</a>
					<ArrowUpRight size={12} strokeWidth={4} />
				</div>
				<div className="mx-auto mt-16 w-1/3 space-y-16">
					<p className="text-4xl uppercase">
						Lorem ipsum dolor, sit amet consec- tetur adipisicing
						elit. Molestiae optio quis sunt, dolores porro inventore
						ex dignissimos tenetur, aspernatur, nemo vel explicabo.
					</p>
				</div>
			</div>
		</section>
	);
};

/* 

<section className="flex min-h-screen w-full select-none flex-col space-y-16 border-white">
					<Divider />
					<div className="flex w-full justify-between">
						<h4 className="w-1/3 text-lg uppercase">
							About me /<br /> Services
						</h4>
						<div className="w-3/5">
							<p className="indent-64 text-4xl uppercase">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Vel ab commodi repellendus
								doloribus non necessitatibus delectus nulla
								tenetur.
							</p>
							<p className="mt-16 w-2/3 font-['telegraf'] text-2xl">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Vel ab commodi repellendus
								doloribus non necessitatibus delectus nulla
								tenetur, laudantium inventore qui consectetur.
								<br /> <br />
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Laboriosam expedita distinctio
								cupiditate optio ratione beatae nobis commodi ad
								fugiat vel.
							</p>
							<Disclosure>
								{({ open }) => (
									<>
										<div className="">
											<Disclosure.Button className="mt-16 flex h-40 w-full items-center justify-between px-16 text-4xl uppercase leading-none">
												<span>
													Frontend Development
												</span>
												{open ? (
													<Minus
														size={40}
														strokeWidth={1.5}
													/>
												) : (
													<Plus
														size={40}
														strokeWidth={1.5}
													/>
												)}
											</Disclosure.Button>
										</div>
										<Transition
											enter="transition duration-200 ease-out"
											enterFrom="transform opacity-0"
											enterTo="transform opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform opacity-100"
											leaveTo="transform opacity-0">
											<Disclosure.Panel className="mx-16 pb-16">
												<p className="flex w-2/3 items-center font-body text-2xl text-gray3light">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit. Ab, ratione quod
													recusandae ex nobis
													repudiandae aliquam in
													cumque sequi assumenda?
												</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Divider className="border-gray4dark" />
							<Disclosure>
								{({ open }) => (
									<>
										<div className="">
											<Disclosure.Button className="flex h-40 w-full items-center justify-between px-16 text-4xl uppercase leading-none">
												<span>Backend Development</span>
												{open ? (
													<Minus
														size={40}
														strokeWidth={1.5}
													/>
												) : (
													<Plus
														size={40}
														strokeWidth={1.5}
													/>
												)}
											</Disclosure.Button>
										</div>
										<Transition
											enter="transition duration-200 ease-out"
											enterFrom="transform opacity-0"
											enterTo="transform opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform opacity-100"
											leaveTo="transform opacity-0">
											<Disclosure.Panel className="mx-16 pb-16">
												<p className="flex w-2/3 items-center font-body text-2xl text-gray3light">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit. Ab, ratione quod
													recusandae ex nobis
													repudiandae aliquam in
													cumque sequi assumenda?
												</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Divider className="border-gray4dark" />
							<Disclosure>
								{({ open }) => (
									<>
										<div className="">
											<Disclosure.Button className="flex h-40 w-full items-center justify-between px-16 text-4xl uppercase leading-none">
												<span>Apps Development</span>
												{open ? (
													<Minus
														size={40}
														strokeWidth={1.5}
													/>
												) : (
													<Plus
														size={40}
														strokeWidth={1.5}
													/>
												)}
											</Disclosure.Button>
										</div>
										<Transition
											enter="transition duration-200 ease-out"
											enterFrom="transform opacity-0"
											enterTo="transform opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform opacity-100"
											leaveTo="transform opacity-0">
											<Disclosure.Panel className="mx-16 pb-16">
												<p className="flex w-2/3 items-center font-body text-2xl text-gray3light">
													Lorem ipsum dolor sit amet,
													consectetur adipisicing
													elit. Ab, ratione quod
													recusandae ex nobis
													repudiandae aliquam in
													cumque sequi assumenda?
												</p>
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<Divider className="border-gray4dark" />
						</div>
					</div>
				</section>

*/
