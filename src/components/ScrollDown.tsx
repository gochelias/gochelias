import { Tween } from 'react-gsap';

export const ScrollDown = () => (
	<div className="scroll_down">
		<Tween
			from={{ opacity: 0 }}
			duration={1.8}
			delay={4}
			ease="Expo.easeInOut">
			<span className="rotate-90 font-medium uppercase">Scroll</span>
		</Tween>
		<div className="flex h-20 items-start ">
			<Tween
				from={{ height: 0 }}
				duration={1.8}
				delay={4.8}
				ease="Expo.easeInOut">
				<div className="scroll_down_line" />
			</Tween>
		</div>
	</div>
);
