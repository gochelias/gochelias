import type { ReactNode } from 'react';

export function Scaffold({ children }: { children: ReactNode }) {
	return (
		<main className="box">
			<section className="wrapper padding navPadding min-h-screen">
				{children}
			</section>
		</main>
	);
}
