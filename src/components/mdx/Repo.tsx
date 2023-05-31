import { Book } from 'react-feather';

import { GitHub, GitLab } from 'components/icons';

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
		<div className="repo mx-auto flex w-full max-w-xl flex-col gap-y-3 border border-gray6dark bg-[#0a0a0a] p-5">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Book className="h-[22px] text-white" />
					<a
						className="flex items-center gap-1 leading-normal no-underline"
						href={`https://${url}`}
						title={`${author}/${name}`}
						target="_blank"
						rel="noreferrer"
						translate="no">
						<span className="text-gray3light">{author}</span>
						<span className="text-gray2dark">/</span>
						<span className="text-white">{name}</span>
					</a>
				</div>
				<div className="flex h-[22px] w-[22px] items-center overflow-hidden">
					{host.startsWith('github') ? (
						<GitHub className="text-white" />
					) : (
						<GitLab />
					)}
				</div>
			</div>
			<p className="text-xl line-clamp-2">{description}</p>
			<p className="flex items-center space-x-6 text-lg text-gray">
				<span>{license}</span>
			</p>
		</div>
	);
}
