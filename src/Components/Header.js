import React, { useState } from 'react';
import logo from '../images/raghav.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className='bg-[#d1e0f6] bg-opacity-60 flex flex-row justify-between items-center w-screen px-5 h-20 py-3 bg-blend-darken z-30 fixed'>
				<div className='w-14'>
					<img src={logo} alt='logo' />
				</div>
				<div className='hidden md:flex flex-row justify-between align-middle font-semibold w-96'>
					<span className='cursor-pointer'>About</span>
					<span className='cursor-pointer'>Experience</span>
					<span className='cursor-pointer'>Projects</span>
					<span className='cursor-pointer'>Contact</span>
				</div>
				{/* Hamburger Icon for Mobile */}
				<div className='md:hidden'>
					<button
						className='focus:outline-none'
						onClick={handleMenuToggle}
						aria-label='Toggle Menu'>
						{isMenuOpen ? <GrClose /> : <GiHamburgerMenu />}
					</button>
				</div>
				{/* Mobile Menu */}
			</div>
			{isMenuOpen && (
				<div className='md:hidden absolute top-20 z-30  flex flex-col items-center font-semibold w-96 bg-[#d1e0f6] bg-opacity-60  p-4 w-full'>
					<span className='block cursor-pointer mb-2'>About</span>
					<span className='block cursor-pointer mb-2'>Experience</span>
					<span className='block cursor-pointer mb-2'>Projects</span>
					<span className='block cursor-pointer'>Contact</span>
				</div>
			)}
		</>
	);
};

export default Header;
