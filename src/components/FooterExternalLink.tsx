import { ExternalLink } from 'react-feather';

type FooterExternalLinkProps = {
	url: string;
	name: string;
	title: string;
};

export const FooterExternalLink = ({
	url,
	name,
	title,
}: FooterExternalLinkProps) => (
	<a
		className="group flex space-x-2 leading-none hover:text-gray2light"
		href={url}
		title={title}
		target="_blank"
		rel="noreferrer">
		<span>{name}</span>
		<ExternalLink
			size={18}
			className="text-transparent transition-colors group-hover:text-white"
		/>
	</a>
);
