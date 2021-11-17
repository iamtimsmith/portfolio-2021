import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import './email-signup.scss';

const EmailSignup = ({ title = `Sign up for my mailing list!` }) => {
	const [email, setEmail] = useState(``);
	const [response, setResponse] = useState<any | null>(null);

	const handleSubmit = async (e: MouseEvent) => {
		e.preventDefault();
		// Check for valid email format
		const emailFormat = new RegExp(
			"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
			'gi'
		);
		if (emailFormat.test(email)) {
			const data = await addToMailchimp(email);
			setResponse(data);
		} else {
			setResponse({ msg: `You must use a valid email!`, result: `error` });
		}
	};

	return (
		<aside className='email-signup'>
			<p className='email-signup__title'>{title}</p>
			{(response && response.result === `success` && (
				<p>
					Awesome! You're signed up and can expect a monthly email with all of
					my latest blog posts!
				</p>
			)) || (
				<>
					<p>
						By signing up, you'll receive a monthly email with my latest blog
						posts about development, career, and more.
					</p>
					<form
						className={`email-signup__form ${
							response && response.result === 'error'
								? 'email-signup__form--error'
								: ''
						}`}
						onSubmit={(e: any) => handleSubmit(e)}
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
					</form>
				</>
			)}
		</aside>
	);
};

export default EmailSignup;
