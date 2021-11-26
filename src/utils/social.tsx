import React from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { GiTechnoHeart, GiPumpkinLantern } from 'react-icons/gi';
import { TiTree } from 'react-icons/ti';
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaPinterest,
  FaDev,
  FaEnvelope,
} from 'react-icons/fa';

export const getIcon = (icon: string) => {
  switch (icon) {
    case 'christmas':
      return <TiTree />;
    case 'dark':
      return <IoMoonOutline />;
    case 'dev':
      return <FaDev />;
    case 'email':
      return <FaEnvelope />;
    case 'facebook':
      return <FaFacebookF />;
    case 'github':
      return <FaGithub />;
    case 'halloween':
      return <GiPumpkinLantern />;
    case 'heart':
      return <GiTechnoHeart />;
    case 'light':
      return <IoSunnyOutline />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'pinterest':
      return <FaPinterest />;
    case 'twitter':
      return <FaTwitter />;
    default:
      return;
  }
};

export const getSharingData = (url: string, image: string, title: string) => [
  {
    name: `Facebook`,
    href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    name: `Twitter`,
    href: `https://twitter.com/share?url=${url}&text=Check out this article!`,
  },
  {
    name: `Linkedin`,
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
  },
  {
    name: `Pinterest`,
    href: `https://pinterest.com/pin/create/button/?url=${url}&media=${image}&description=${title}`,
  },
  {
    name: `Email`,
    href: `mailto:?&body=Check%20this%20article%20out!%0A%0A${url}`,
  },
];
