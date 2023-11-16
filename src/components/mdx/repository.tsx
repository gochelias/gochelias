import { Book } from 'react-feather';

import { GitHub, GitLab } from '@/components/icons';
import styles from './mdx.module.css';

type RepoProps = {
	url: string;
	description: string;
	license: string;
};

export default function Repo({ url, description, license }: RepoProps) {
	const urlSplit = url.split('/');
	const host = urlSplit[0];
	const author = urlSplit[1];
	const name = urlSplit[2];

	return (
		<div className={styles.repo}>
			<div className={styles.repoHeader}>
				<div className="flex items-center gap-3">
					<Book className={styles.icon} />
					<a
						className={styles.repoName}
						href={`https://${url}`}
						title={`${author}/${name}`}
						target="_blank"
						rel="noreferrer"
						translate="no">
						<span className="text-gray3light">{author}</span>{' '}
						<span className="text-gray2dark">/</span>{' '}
						<span className="text-white">{name}</span>
					</a>
				</div>
				<div className={styles.repoIcon}>
					{host.startsWith('github') ? (
						<GitHub className="text-white" />
					) : (
						<GitLab />
					)}
				</div>
			</div>
			<p className={styles.repoDescription}>{description}</p>
			<p className={styles.repoData}>
				<span>{license}</span>
			</p>
		</div>
	);
}
