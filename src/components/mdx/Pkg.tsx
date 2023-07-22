import { Package } from 'react-feather';

import CopyButton from '@/components/CopyButton';

type PkgProps = {
	name: string;
	description: string;
	install: string;
	url: string;
};

export default function Pkg({ url, name, description, install }: PkgProps) {
	return (
		<div className="pkg mx-auto flex w-full max-w-xl flex-col gap-y-3 border border-gray6dark bg-[#0a0a0a] p-4 md:p-5">
			<div className="flex items-center gap-3">
				<Package className="h-5 text-white md:h-[22px]" />
				<a
					className="flex items-center gap-1 leading-normal no-underline"
					href={url}
					title={name}
					target="_blank"
					rel="noreferrer"
					translate="no">
					{name}
				</a>
			</div>
			<p className="line-clamp-2 text-base md:text-xl">{description}</p>
			<div className="flex w-full items-center overflow-hidden border border-gray6dark bg-black">
				<p
					className="w-full overflow-x-auto whitespace-nowrap p-3 font-mono text-sm leading-normal md:p-4 md:text-lg"
					translate="no">
					{install}
				</p>
				<CopyButton text={install} />
			</div>
		</div>
	);
}
