import { CopyButton } from '@/components';
import styles from './mdx.module.css';

export default function Code(props: any) {
	const { filename, icon, children } = props;
	const { raw } = children.props.children.props;

	const iconUrl =
		'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/d0ed208beee4da2a98e450f7883326d86d07e7b2/icons';

	return (
		<div className={styles.box}>
			<div className={styles.codeHeader}>
				<div className={styles.codeTab}>
					<img
						src={`${iconUrl}/${icon}.svg`}
						className={styles.codeIcon}
						alt={icon}
					/>
					<p translate="no">{filename}</p>
				</div>
				<CopyButton text={raw} />
			</div>
			<div {...props} />
		</div>
	);
}
