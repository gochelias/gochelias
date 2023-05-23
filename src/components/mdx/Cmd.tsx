import { Copy } from 'react-feather';

export default function Cmd(props: any) {
	return (
		<div className="cmd flex items-center border border-gray6dark bg-[#0a0a0a]">
			<div {...props} className="w-full" />
			<button className="self-end p-4 text-gray" type="button">
				<Copy />
			</button>
		</div>
	);
}
