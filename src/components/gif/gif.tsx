import React, { useRef, useEffect } from 'react';
import { Figure } from './gif.style';
import { GifProps } from './gif.i';

export const Gif = ({ src, alt, width = '400' }: GifProps) => {
  const vid = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (vid.current) {
      if (vid.current.paused) {
        vid.current.play();
      } else {
        vid.current.pause();
      }
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (vid.current) {
  //       vid.current.pause();
  //     }
  //   }, 5000);
  // }, []);

  return (
    <Figure>
      <video
        ref={vid}
        src={src}
        width={width}
        onClick={handleClick}
        autoPlay
        loop
        playsInline
        muted
      />
      {alt && <figcaption>{alt}</figcaption>}
    </Figure>
  );
};
