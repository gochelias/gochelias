type QuoteProps = {
	author: string;
	content: string;
};

export default function Quote({ author, content }: QuoteProps) {
	return (
		<blockquote className="my-8 flex w-full gap-x-6">
			<svg
				className="h-10 w-10 text-gray2dark"
				viewBox="0 0 59 59"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M18.088 0.799988H23.464V12.064H18.344C15.016 12.064 13.224 12.832 13.224 17.44V23.584H23.208V58.912H0.68V17.696C0.68 6.43199 7.08 0.799988 18.088 0.799988ZM53.416 0.799988H58.792V12.064H53.672C50.088 12.064 48.552 12.832 48.552 17.44V23.584H58.536V58.912H36.008V17.696C36.008 6.43199 42.408 0.799988 53.416 0.799988Z"
					fill="currentColor"
				/>
			</svg>
			<div className="flex w-full flex-col">
				<p className="border-white py-3 text-2xl leading-relaxed text-white">
					{content}
				</p>
				<p className="space-x-4 self-end">
					<span>⎯</span>
					<span>{author}</span>
				</p>
			</div>
		</blockquote>
	);
}
