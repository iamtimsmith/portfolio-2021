const React = require(`react`);

exports.onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
				(function() {
					// Update theme to light or dark
					function setTheme(theme) {
						window.theme = theme;
						// TODO: Update logic
						console.log('Theme Updated to ' + theme);

						if (theme === 'dark') {
							document.documentElement.className = 'dark';
						} else {
							document.documentElement.className = '';
						}
					};

					// Save user preference
					window.setPreferredTheme = function(theme) {
						setTheme(theme);
						try {
							localStorage.setItem('theme', theme);
						} catch(e) {}
					};

					// Is theme in localStorage
					let saved;
					try {
						saved = localStorage.getItem('theme');
					} catch(e) {}

					// Check for preference
					let isDark = window.matchMedia('(prefers-color-scheme: dark)');
					// Set initial theme - setting > os setting > default
					setTheme(saved || (isDark.matches ? 'dark' : 'light'));
				})();
				`,
      }}
    />,
  ]);
};
