import React from 'react';
import Layout from 'components/layout';
import Projects from 'components/projects';
import Seo from 'components/seo';

const ProjectsPage = () => {
	return (
		<Layout>
			<Seo
				title='Projects'
				description={`A selection of projects Tim Smith has contributed to or built from scratch.`}
				image='/timsmith-social.jpg'
			/>
			<h1>Projects</h1>
			<Projects />
		</Layout>
	);
};

export default ProjectsPage;
