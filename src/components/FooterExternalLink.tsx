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
	<li className="hover:text-white hover:underline">
		<a href={url} title={title}>
			{name}
		</a>
	</li>
);
