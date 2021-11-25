import styled from 'styled-components';
import { mq, tablet } from '../../styles/breakpoints';

export const SocialAside = styled.aside`
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 350px;
  min-height: 300px;
  width: 80px;

  ${mq(tablet)} {
    display: block;
  }
`;

export const SocialNav = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-4) var(--spacing-0);
  overflow: visible;

  &,
  * {
    transition: 0.3s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 40px;
    height: 200px;
    width: 1px;
    background: var(--color-grey-600);
    z-index: -1;
    transition: 0.3s;
  }

  a {
    font-size: var(--font-size-xl);
    background: none;
    border: none;
    margin: var(--spacing-1) var(--spacing-4);
    color: var(--color-grey-600);
    cursor: pointer;

    &:hover {
      color: var(--color-accent-400);
    }
  }
`;

interface BackToTopButtonProps {
  show: boolean;
}
export const BackToTopButton = styled.button<BackToTopButtonProps>`
  font-size: var(--font-size-xl);
  background: none;
  border: none;
  margin: var(--spacing-1) var(--spacing-4);
  color: var(--color-grey-600);
  cursor: pointer;
  visibility: ${props => (props.show ? `visible` : `hidden`)};
  opacity: ${props => (props.show ? 1 : 0)};

  &:hover {
    color: var(--color-accent-400);
  }
`;
