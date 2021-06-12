import React from "react";

const Gif = ({src, alt, width = "400"}) => {
  return (
    <figure
      style={{textAlign: `center`}}
      dangerouslySetInnerHTML={{
        __html: `
					<video src='${src}' width='${width}' autoplay loop playsinline muted />
					${alt && <figcaption>{alt}</figcaption>}
				`,
      }}
    />
  );
};

export default Gif;
