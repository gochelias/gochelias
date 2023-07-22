import CopyButton from '@/components/CopyButton';

export default function Cmd(props: any) {
	const { children } = props;
	const { raw } = children.props.children.props;

	return (
		<div className="cmd flex items-center overflow-hidden border border-gray6dark bg-[#0a0a0a]">
			<div {...props} className="flex-auto overflow-hidden" />
			<CopyButton text={raw} />
		</div>
	);
}
