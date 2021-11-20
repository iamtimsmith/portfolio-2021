import React, { useEffect, useState, useContext } from 'react';
import { SiteContext } from '../../utils/context';
import { getIcon } from '../../utils/social';
import './socials.scss';

export const Socials = () => {
  const [show, setShow] = useState(false);
  const { site } = useContext(SiteContext);

  const handleShow = () => setShow(window.scrollY > 0);
  const handleClick = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

  useEffect(() => {
    document.addEventListener(`scroll`, handleShow);
    return () => document.removeEventListener(`scroll`, handleShow);
  }, []);

  return (
    <aside className='socials'>
      <nav className='socials__nav'>
        <button className={show ? `show` : ``} onClick={() => handleClick()}>
          &uarr;
        </button>
        {site.socials.map(social => (
          <a
            href={social.url}
            target='_blank'
            rel='noreferrer nofollow'
            key={social.name}
          >
            {getIcon(social.name.toLowerCase())}
          </a>
        ))}
      </nav>
    </aside>
  );
};
