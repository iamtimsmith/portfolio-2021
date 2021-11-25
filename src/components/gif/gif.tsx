import React from 'react';
import { Figure } from './gif.style';

interface GifProps {
  src: string;
  alt?: string;
  width?: number | string;
}

export const Gif = ({ src, alt, width = '400' }: GifProps) => {
  return (
    <Figure>
      <video src={src} width={width} autoPlay loop playsInline muted />
      {alt && <figcaption>{alt}</figcaption>}
    </Figure>
  );
};
