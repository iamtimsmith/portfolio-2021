import styled from 'styled-components';
import { darken } from 'polished';
import { mq, tablet } from '../../styles/breakpoints';

const colors = {
  facebook: '#3b5998',
  twitter: '#1da1f2',
  linkedin: '#0077b5',
  pinterest: '#bd081c',
  email: '#838485',
  icon: '#ffffff',
};

interface SharingBarProps {
  show: boolean;
}

export const SharingBar = styled.nav<SharingBarProps>`
  position: fixed;
  bottom: ${props => (props.show ? `0px` : `-65px`)};
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transition: left 0.3s, bottom 0.3s;

  ${mq(tablet)} {
    top: 0;
    left: ${props => (props.show ? `0px` : `-65px`)};
    bottom: 0;
    right: auto;
    flex-direction: column;
  }
`;

export const Label = styled.p`
  font-size: var(--font-size-sm);
  margin: var(--spacing-0);
  color: var(--color-grey-700);
  display: none;

  ${mq(tablet)} {
    display: block;
  }
`;

// Use for casting site prop to one of the options in component.
export type Site = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'email';
interface ButtonProps {
  site: Site;
}
export const Button = styled.a<ButtonProps>`
  height: 50px;
  width: auto;
  flex: 1 0;
  color: ${colors.icon};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-xl);
  background: ${props => colors[props.site]};

  ${mq(tablet)} {
    width: 50px;
    flex: 0 0 50px;
  }

  &:hover {
    background: ${props => darken(0.1, colors[props.site])};
  }
`;
