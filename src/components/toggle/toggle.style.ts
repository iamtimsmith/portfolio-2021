import styled from 'styled-components';
import { ToggleIconProps } from './toggle.i';

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

export const ToggleIcon = styled.span<ToggleIconProps>`
  display: ${props => (props.show ? `block` : `none`)};
`;
