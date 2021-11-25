import React, { FormEvent, useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { isValidEmail } from '../../utils/validators';
import {
  EmailSignupAside,
  EmailSignupTitle,
  EmailSignupForm,
} from './email-signup.style';
// import './email-signup.scss';

export const EmailSignup = ({ title = `Sign up for my mailing list!` }) => {
  const [email, setEmail] = useState(``);
  const [response, setResponse] = useState<{ result: string; msg: string }>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Check for valid email format

    if (isValidEmail(email)) {
      const data = await addToMailchimp(email);
      setResponse(data);
    } else {
      setResponse({ msg: `You must use a valid email!`, result: `error` });
    }
  };

  return (
    <EmailSignupAside>
      <EmailSignupTitle children={title} />
      {response && response.result === `success` ? (
        <p>
          Awesome! You're signed up and can expect a monthly email with all of
          my latest blog posts!
        </p>
      ) : (
        <>
          <p>
            By signing up, you'll receive a monthly email with my latest blog
            posts about development, career, and more.
          </p>
          <EmailSignupForm
            error={response && response.result === 'error'}
            onSubmit={e => handleSubmit(e)}
          >
            {response && response.result === `error` && (
              <p
                className={`email-signup__${response.result}`}
                dangerouslySetInnerHTML={{ __html: response.msg }}
              />
            )}
            <input
              type='text'
              value={email}
              aria-label='email'
              onChange={e => setEmail(e.target.value)}
              placeholder='kevin.malone@dundermifflin.com'
            />
            <button>Submit</button>
          </EmailSignupForm>
        </>
      )}
    </EmailSignupAside>
  );
};
