import { useSpring, animated } from '@react-spring/web';

import banner from '../images/hero-bg.jpg';
import object from '../images/hero-obj.png';

const Hero = () => {
	const isMobile = window.innerWidth < 768; // Define the breakpoint for mobile screens (adjust as needed)

	const springs = useSpring({
		from: { x: 0 },
		to: { x: isMobile ? 20 : 100 }, // Adjust the 'to' value based on whether it's a mobile screen or not
	});

	return (
		<div className='relative'>
			{/* Responsive Image */}
			<img
				className='h-[100vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] xl:h-[100vh] w-full object-cover'
				src={banner}
				alt='Banner'
			/>
			<div className='relative'>
				<img
					src={object}
					alt='raghav'
					className='absolute h-[40vh] l:right-7 left-0 bottom-0 mr-60 sm:h-[60vh] md:h-[70vh] lg:h-[90vh] xl:h-[100vh] w-full object-cover'
				/>
			</div>

			<animated.div
				style={springs}
				className='absolute left-2 sm:left-3 md:left-5 lg:left-8 xl:left-11 bottom-80 md:bottom-56 h-72 w-auto rounded flex flex-col items-center justify-center px-4 py-4 md:mt-5 lg:mt-8 xl:mt-8'>
				<h2 className='font-black text-eerieBlack lg:text-5xl md:text-4xl text-3xl lg:leading-[90px] mt-2 text-eerieBlack font-mova font-extrabold uppercase'>
					Hi, I'm <br />
					<span className='text-battleGray lg:text-5xl md:text-4xl text-3xl font-mova font-extrabold uppercase'>
						Raghava Kumar
					</span>
				</h2>
			</animated.div>
		</div>
	);
};

export default Hero;
