import { RingsWaves } from 'components/RingsWaves';
import Link from 'next/link';

const Error404 = () => (
	<main className="h-screen w-full select-none p-16">
		<div className="relative z-[1] flex h-full w-full flex-col items-center justify-center space-y-6">
			<h2 className="text-[22rem] font-semibold leading-none">404</h2>
			<div className="flex items-end space-x-1 text-xl font-medium">
				<p>Seems you are lost, come back</p>
				<Link href="/">
					<a className="underline">Home</a>
				</Link>
			</div>
		</div>
		<RingsWaves delay={0} />
	</main>
);

export default Error404;
