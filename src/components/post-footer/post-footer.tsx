import React from 'react';
import Bio from 'components/bio';
import Seo from 'components/seo';
import Tags from 'components/tags';
import Sharing from 'components/sharing';

interface PostFooterProps {
	data: {
		title: string;
		tags: string[];
		description: string;
		image: string;
	};
}

const PostFooter = ({ data }: PostFooterProps) => {
	return (
		<footer>
			<Seo
				title={data.title}
				description={data.description}
				image={data.image}
			/>
			{data.tags && (
				<>
					<Tags tags={data.tags} />
					<Bio showAuthor />
					<Sharing title={data.title} />
				</>
			)}
		</footer>
	);
};

export default PostFooter;
