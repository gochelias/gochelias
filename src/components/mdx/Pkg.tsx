import { Copy, Package } from 'react-feather';

type PkgProps = {
	name: string;
	description: string;
	install: string;
	url: string;
};

export default function Pkg({ url, name, description, install }: PkgProps) {
	return (
		<div className="pkg mx-auto flex w-full max-w-xl flex-col gap-y-3 border border-gray6dark bg-[#0a0a0a] p-5">
			<div className="flex items-center gap-3">
				<Package className="h-[22px] text-white" />
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
			<p className="text-xl line-clamp-2">{description}</p>
			<div className="flex items-center border border-gray6dark bg-black">
				<p
					className="w-full p-4 font-mono text-lg leading-normal"
					translate="no">
					{install}
				</p>
				<button className="p-4 text-gray" type="button">
					<Copy />
				</button>
			</div>
		</div>
	);
}
