import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from '@reach/router';
import { SiteContext } from '../../utils/context';
import { getIcon, getSharingData } from '../../utils/social';
import { SharingBar, Label, Button, Site } from './sharing.style';

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
    <SharingBar show={showing} aria-label='Sharing navigation'>
      <Label>Share:</Label>
      {getSharingData(url, image, title).map(site => (
        <Button
          site={site.name.toLowerCase() as Site}
          href={site.href}
          target='_parent'
          rel='noreferrer nofollow'
          title={`Share to ${site.name}`}
          aria-label={`Share to ${site.name}`}
          key={site.name}
        >
          {getIcon(site.name.toLowerCase())}
        </Button>
      ))}
    </SharingBar>
  );
};
