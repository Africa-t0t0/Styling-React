import { useState } from 'react';
import { styled } from 'styled-components';

import Button from './Button';
import Input from './Input';


// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `






export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'
    >
      {/* <div className="controls"> */}
      <div
        className='flex flex-col gap-2 mb-6'
      >
        {/* <p> */}
            {/* <Label
              $invalid={emailNotValid}
              // testing another wayt of showing dynamic fields
              // className={`label ${emailNotValid ? 'invalid' : ''}`}
            >Email</Label>
            <Input
              type="email"
              style={{
                // in this case, if is not valid, we use fed2d2, if valid we use the other color
                // backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
              }}
              // we can also use conditional class names!!
              // className={emailNotValid ? 'invalid' : undefined}
              $invalid={emailNotValid}
              onChange={(event) => handleInputChange('email', event.target.value)}
            /> */}
            <Input
              label="Email"
              invalid={emailNotValid}
              type='email'
              onChange={(event) => handleInputChange('email', event.target.value)}
            >

            </Input>
            <Input
              label="Password"
              invalid={passwordNotValid}
              type='password'
              onChange={(event) => handleInputChange('password', event.target.value)}
            >

            </Input>
          {/* </p> */}
          {/* <p> */}
            {/* <Label
              // className={`label ${passwordNotValid ? 'invalid' : ''}`}
              $invalid={passwordNotValid}
            >Password</Label>
            <Input
              type="password"
              // className={passwordNotValid ? 'invalid' : undefined}
              $invalid={passwordNotValid}
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            /> */}
          {/* </p> */}

      </div>
      {/* </div> */}
      <div
        className="flex justify-end gap-4"
        >
        <button type="button" className='text-amber-400 hover:text-amber-500'>
          Create a new account
        </button>
        <Button
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
