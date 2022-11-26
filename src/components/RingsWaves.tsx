'use client';

import { Tween } from 'react-gsap';

export const RingsWaves = ({ delay }: { delay: number }) => (
	<div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center text-[#666666]">
		<Tween
			from={{ opacity: 0 }}
			to={{ opacity: 1 }}
			duration={2}
			delay={delay}
			stagger={0.2}
			ease="Expo.easeInOut">
			<svg
				className="ring_one block h-80 sm:h-4/5 md:h-4/6 lg:h-4/5 2xl:h-5/6"
				width="1304"
				height="1278"
				viewBox="0 0 1304 1278"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M653.808 4.28782L653.831 4.28681L653.855 4.28469C847.392 -13.196 1009.6 39.5608 1123.43 151.363C1237.27 263.174 1302.84 434.16 1302.84 653.367C1302.84 832.886 1286.19 988.51 1196.85 1099.29C1107.55 1210.02 945.415 1276.19 653.765 1276.19C295.328 1276.19 42.1375 1009.13 4.68069 653.263C-14.0415 475.39 39.2214 317.859 151.619 202.449C264.026 87.029 435.66 13.655 653.808 4.28782Z"
					stroke="currentColor"
					strokeWidth="2"
				/>
			</svg>
			<svg
				className="ring_two absolute block h-80 sm:h-4/5 md:h-4/6 lg:h-4/5 2xl:h-5/6"
				width="1304"
				height="1278"
				viewBox="0 0 1304 1278"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M653.808 4.28782L653.831 4.28681L653.855 4.28469C847.392 -13.196 1009.6 39.5608 1123.43 151.363C1237.27 263.174 1302.84 434.16 1302.84 653.367C1302.84 832.886 1286.19 988.51 1196.85 1099.29C1107.55 1210.02 945.415 1276.19 653.765 1276.19C295.328 1276.19 42.1375 1009.13 4.68069 653.263C-14.0415 475.39 39.2214 317.859 151.619 202.449C264.026 87.029 435.66 13.655 653.808 4.28782Z"
					stroke="currentColor"
					strokeWidth="2"
				/>
			</svg>
		</Tween>
	</div>
);
