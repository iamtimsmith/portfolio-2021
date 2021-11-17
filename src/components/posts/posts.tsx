import React from 'react';
import { Link } from 'gatsby';
import './posts.scss';

interface PostsProps {
	posts: {
		id: string;
		frontmatter: {
			title: string;
		};
		fields: {
			slug: string;
		};
		excerpt: string;
	}[];
}

const Posts = ({ posts }: PostsProps) => {
	return (
		<ul className='posts'>
			{posts.map(node => (
				<li className='posts__post' key={node.id}>
					<strong className='posts__post-title'>
						<Link to={node.fields.slug}>{node.frontmatter.title}</Link>
					</strong>
					<p>{node.excerpt}</p>
				</li>
			))}
		</ul>
	);
};

export default Posts;
