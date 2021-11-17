import React from 'react';
// import PropTypes from 'prop-types';
// import {graphql, useStaticQuery} from 'gatsby';
// import {
//   GoStar,
//   GoRepoForked,
//   GoMarkGithub,
//   GoLinkExternal,
//   GoRepo,
// } from 'react-icons/go';

const Projects = () => {
	// const {projects} = useStaticQuery(graphql`
	//   query ProjectsQuery {
	//     projects: github {
	//       viewer {
	//         pinnedItems(first: 6) {
	//           nodes {
	//             ... on GitHub_Repository {
	//               id
	//               name
	//               description
	//               homepageUrl
	//               url
	//               stargazerCount
	//               forkCount
	//             }
	//           }
	//         }
	//       }
	//     }
	//   }
	// `);

	// return (
	//   <section className='projects'>
	//     {projects.viewer.pinnedItems.nodes.map(project => (
	//       <article className='projects__project' key={project.id}>
	//         <p className='projects__project-title'>
	//           <GoRepo />
	//           <a href={project.url} target='_blank'>
	//             {project.name}
	//           </a>
	//         </p>
	//         <p className='projects__project-description'>{project.description}</p>
	//         <div className='projects__project-meta'>
	//           <div className='projects__projects stats'>
	//             {project.stargazerCount > 0 && (
	//               <span>
	//                 <GoStar /> {project.stargazerCount}
	//               </span>
	//             )}
	//             {project.forkCount > 0 && (
	//               <span>
	//                 <GoRepoForked /> {project.forkCount}
	//               </span>
	//             )}
	//           </div>
	//           <nav className='projects__project-links'>
	//             {project.homepageUrl && (
	//               <a href={project.homepageUrl} target='_blank'>
	//                 <GoLinkExternal />
	//               </a>
	//             )}
	//             <a href={project.url} target='_blank'>
	//               <GoMarkGithub />
	//             </a>
	//           </nav>
	//         </div>
	//       </article>
	//     ))}
	//   </section>
	// );
	return <p>Projects</p>;
};

export default Projects;
