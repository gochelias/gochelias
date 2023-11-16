import { CopyButton } from '@/components';
import styles from './mdx.module.css';

export default function Cmd(props: any) {
	const { children } = props;
	const { raw } = children.props.children.props;

	return (
		<div className={styles.cmd}>
			<div {...props} className="flex-auto overflow-hidden" />
			<CopyButton text={raw} />
		</div>
	);
}
