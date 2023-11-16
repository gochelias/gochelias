/* eslint-disable @typescript-eslint/naming-convention */
import localFont from 'next/font/local';

export const clash_display = localFont({
	src: './clash-display-variable.woff2',
	variable: '--font-clash-display',
	display: 'swap',
});

export const telegraf = localFont({
	src: './telegraf-400-regular.woff2',
	variable: '--font-telegraf',
	weight: '400',
	style: 'normal',
	display: 'swap',
});

export const jet_brains_mono = localFont({
	src: './jetbrains-mono-400-regular.woff2',
	variable: '--font-jetbrains-mono',
	weight: '400',
	style: 'normal',
	display: 'swap',
});
