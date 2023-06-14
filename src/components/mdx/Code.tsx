import CopyButton from 'components/CopyButton';

export default function Code(props: any) {
	const { filename, icon, children } = props;
	const { raw } = children.props.children.props;
	return (
		<div className="border border-gray6dark">
			<div className="flex items-center justify-between bg-black">
				<div className="flex w-max items-center space-x-3 bg-[#0a0a0a] py-4 pl-4 pr-5 font-mono text-lg">
					<img
						src={`https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/d0ed208beee4da2a98e450f7883326d86d07e7b2/icons/${icon}.svg`}
						className="h-[22px] w-[22px] object-cover object-center"
						alt=""
					/>
					<p className="leading-normal" translate="no">
						{filename}
					</p>
				</div>
				<CopyButton text={raw} />
			</div>
			<div {...props} />
		</div>
	);
}
