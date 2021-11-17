import React, { useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import './toggle.scss';

declare const window: any;

const Toggle = () => {
	const [isDark, setIsDark] = useState(
		typeof window !== `undefined` && window.theme === `dark`
	);

	const handleClick = () => {
		const themeDark = !isDark;
		setIsDark(themeDark);
		window.setPreferredTheme(themeDark ? `dark` : `light`);
	};

	return (
		<button
			onClick={() => handleClick()}
			aria-label='Toggle Theme'
			className='toggle'
		>
			<IoSunnyOutline className='toggle__light' />
			<IoMoonOutline className='toggle__dark' />
		</button>
	);
};

export default Toggle;
