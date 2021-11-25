import styled from 'styled-components';
import { mq, tablet } from '../../styles/breakpoints';

export const EmailSignupAside = styled.aside`
  display: block;
  margin: var(--spacing-6) var(--spacing-0);
  padding: var(--spacing-8);
  background: var(--color-grey-100);
  color: var(--color-grey-900);
  text-align: center;

  ${mq(tablet)} {
    padding: var(--spacing-8) var(--spacing-20);
  }
`;

export const EmailSignupTitle = styled.p`
  font-size: var(--font-size-xl);
  font-weight: 900;
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4);
  line-height: 1.2;
`;

interface EmailSignupFormProps {
  error?: boolean;
}
export const EmailSignupForm = styled.form<EmailSignupFormProps>`
  color: ${props => (props.error ? `var(--color-error-600)` : `inherit`)};

  input {
    width: 300px;
    max-width: 100%;
    margin: var(--spacing-2) var(--spacing-0);
  }
`;
