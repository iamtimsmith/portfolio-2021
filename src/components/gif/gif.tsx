import React from 'react';
import './gif.scss';

interface GifProps {
  src: string;
  alt?: string;
  width?: number | string;
}

export const Gif = ({ src, alt, width = '400' }: GifProps) => {
  return (
    <figure className='gif'>
      <video src={src} width={width} autoPlay loop playsInline muted />
      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
};
