import React, { useEffect, useState, useContext } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import { SiteContext } from '../../utils/context';
import './socials.scss';

export const Socials = () => {
  const [show, setShow] = useState(false);
  const { site } = useContext(SiteContext);

  const getIcon = (social: string) => {
    switch (social) {
      case 'twitter':
        return <FaTwitter />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'github':
        return <FaGithub />;
      case 'dev':
        return <FaDev />;
      default:
        return null;
    }
  };

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
