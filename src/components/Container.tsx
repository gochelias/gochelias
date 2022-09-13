import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => (
	<div className="w-full px-4 lg:px-8 2xl:px-16">
		<div className="h-full w-full">{children}</div>
	</div>
);
