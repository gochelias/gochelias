'use client';

import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Check, Copy } from 'react-feather';

export default function CopyButton({ text }: { text: string }) {
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
				className="p-4 text-gray transition-colors hover:text-white"
				title="Copy"
				type="button">
				{isCopied ? <Check className="text-white" /> : <Copy />}
			</button>
		</CopyToClipboard>
	);
}
