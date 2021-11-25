import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--color-grey-700);
  font-size: var(--font-size-lg);
  line-height: 0;
  position: relative;
  top: 5px;
  cursor: pointer;
`;

export type Theme = 'dark' | 'light';
interface ToggleIconProps {
  icon: Theme;
  theme: Theme;
}
export const ToggleIcon = styled.span<ToggleIconProps>`
  display: ${props => (props.icon === props.theme ? `block` : `none`)};
`;
