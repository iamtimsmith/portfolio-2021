import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from '@reach/router';
import { SiteContext } from '../../utils/context';
import { getIcon, getSharingData } from '../../utils/social';
import './sharing.scss';

interface SharingProps {
  title: string;
}

export const Sharing = ({ title }: SharingProps) => {
  const { site } = useContext(SiteContext);
  const { pathname } = useLocation();
  const url = `${site.siteUrl}${pathname}`;
  const image = `${url}/twitter-card.jpg`;
  const [showing, setShowing] = useState(false);

  const handleScroll = () =>
    setShowing(
      window.scrollY > 100 && window.scrollY < document.body.clientHeight - 2000
    );

  useEffect(() => {
    document.addEventListener(`scroll`, handleScroll);
    return () => document.removeEventListener(`scroll`, handleScroll);
  }, []);

  return (
    <aside className={showing ? `sharing show` : `sharing`}>
      <p className='sharing__label'>Share:</p>
      {getSharingData(url, image, title).map(site => (
        <a
          className={`sharing__${site.name.toLowerCase()}`}
          href={site.href}
          target='_parent'
          rel='noreferrer nofollow'
          title={`Share to ${site.name}`}
          aria-label={`Share to ${site.name}`}
          key={site.name}
        >
          {getIcon(site.name.toLowerCase())}
        </a>
      ))}
    </aside>
  );
};
