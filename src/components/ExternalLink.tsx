import { ExternalLink as ExternalLinkIcon } from 'react-feather';

type ExternalLinkProps = {
	url: string;
	name: string;
	title: string;
};

export const ExternalLink = ({ url, name, title }: ExternalLinkProps) => (
	<a
		className="group flex space-x-2 leading-none hover:text-gray2light"
		href={url}
		title={title}
		target="_blank"
		rel="noreferrer">
		<span>{name}</span>
		<ExternalLinkIcon
			size={18}
			className="text-transparent transition-colors group-hover:text-white"
		/>
	</a>
);
