import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { SiteContext } from '../../utils/context';
import { SeoProps } from './seo.i';

export const Seo = ({
  description,
  lang = 'en',
  meta,
  title,
  image,
}: SeoProps) => {
  const { site } = useContext(SiteContext);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      {/* prettier-ignore */}
      <title>{title} | {site.title}</title>
      <meta name='description' content={description || site.description} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:type' content='website' />
      <meta name='og:image' content={site.siteUrl + image} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={site.author.twitter} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={site.siteUrl + image} />
      <link rel='shortcut icon' href={site.favicon} />
      {meta}
    </Helmet>
  );
};
