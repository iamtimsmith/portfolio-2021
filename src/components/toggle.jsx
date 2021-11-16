import React, { useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

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
			label='Toggle Theme'
			className='toggle'
		>
			{(isDark && <IoSunnyOutline />) || <IoMoonOutline />}
		</button>
	);
};

export default Toggle;
