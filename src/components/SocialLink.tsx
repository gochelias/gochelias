import { ExternalLink } from 'react-feather';

type SocialLinkProps = {
	name: string;
	username: string;
	url: string;
};

export const SocialLink = ({ type }: { type: SocialLinkProps }) => (
	<a
		className="group flex space-x-2 uppercase leading-none transition-colors hover:text-gray3light"
		href={type.url}
		title={type.username}
		target="_blank"
		rel="noreferrer"
		translate="no">
		<span>{type.name}</span>
		<ExternalLink
			size={18}
			className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		/>
	</a>
);
