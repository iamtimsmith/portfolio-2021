import React, { useEffect, useState, useContext } from 'react';
import { SiteContext } from '../../utils/context';
import { getIcon } from '../../utils/social';
import { SocialContainer, SocialNav, BackToTopButton } from './socials.style';
import { SocialItem } from './socials.i';

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
    <SocialContainer>
      <SocialNav aria-label='Social media menu'>
        <BackToTopButton show={show} onClick={handleClick}>
          &uarr;
        </BackToTopButton>
        {site.socials.map((social: SocialItem, key: number) => (
          <a
            href={social.url}
            target='_blank'
            rel='noreferrer nofollow'
            aria-label={social.name}
            key={key}
          >
            {getIcon(social.name.toLowerCase())}
          </a>
        ))}
      </SocialNav>
    </SocialContainer>
  );
};
