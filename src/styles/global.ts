import { createGlobalStyle } from 'styled-components';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import { christmasTheme } from './themes/christmas';
import { halloweenTheme } from './themes/halloween';
import { normalize } from './normalize';
import { variables } from './variables';
import { elements } from './elements';
import { prism } from './prism';

export const GlobalStyles = createGlobalStyle`
	${normalize}
	${variables}
	${lightTheme}
	${darkTheme}
	${christmasTheme}
	${halloweenTheme}
	${elements}
	${prism}
`;
