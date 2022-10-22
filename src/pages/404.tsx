import { RingsWaves } from 'components/RingsWaves';
import Link from 'next/link';

const Error404 = () => (
	<main className="grid h-screen w-full select-none place-content-center p-16">
		<div className="relative z-[1] flex w-max flex-col items-center justify-center">
			<h2 className="text-[22rem] font-semibold leading-none">404</h2>
			<div className="flex flex-col items-center space-y-4">
				<p className="text-xl font-medium">
					Page not found, seems you are lost.
				</p>
				<Link href="/">
					<a className="flex items-center text-lg font-semibold uppercase hover:text-[#FFEFCF]">
						back
						<hr className="mx-4 h-[1px] w-20 bg-white" />
						Home
					</a>
				</Link>
			</div>
		</div>
		<RingsWaves delay={0} />
	</main>
);

export default Error404;
