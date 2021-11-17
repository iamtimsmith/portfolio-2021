import React from 'react';

interface GifProps {
	src: string;
	alt: string;
	width: string | number;
}

const Gif = ({ src, alt, width = 400 }: GifProps) => {
	return (
		<figure
			style={{ textAlign: `center` }}
			dangerouslySetInnerHTML={{
				__html: `
					<video src='${src}' width='${width}' autoplay loop playsinline muted></video>
					${alt ? `<figcaption>${alt}</figcaption>` : ``}
				`,
			}}
		/>
	);
};

export default Gif;
