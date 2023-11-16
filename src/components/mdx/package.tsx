import { Package } from 'react-feather';

import { CopyButton } from '@/components';
import styles from './mdx.module.css';

type PkgProps = {
	name: string;
	description: string;
	install: string;
	url: string;
};

export default function Pkg({ url, name, description, install }: PkgProps) {
	return (
		<div className={styles.pkg}>
			<div className="flex items-center gap-3">
				<Package className={styles.icon} />
				<a
					className={styles.pkgName}
					href={url}
					title={name}
					target="_blank"
					rel="noreferrer"
					translate="no">
					{name}
				</a>
			</div>
			<p className={styles.pkgDescription}>{description}</p>
			<div className={styles.pkgCmd}>
				<p className={styles.pkgInstall} translate="no">
					{install}
				</p>
				<CopyButton text={install} />
			</div>
		</div>
	);
}
