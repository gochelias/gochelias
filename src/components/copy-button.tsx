'use client';

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Check, Copy } from 'react-feather';

export function CopyButton({ text }: { text: string }) {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const copy = (): void => {
		setIsCopied(true);

		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	return (
		<CopyToClipboard text={text} onCopy={copy}>
			<button
				className="p-3 text-gray transition-colors hover:text-white md:p-4"
				title="Copy"
				type="button">
				{isCopied ? (
					<Check className="w-5 text-white md:w-6" />
				) : (
					<Copy className="w-5 md:w-6" />
				)}
			</button>
		</CopyToClipboard>
	);
}
