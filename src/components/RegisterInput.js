import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LocaleContext from '../context/LocaleContext';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { locale } = React.useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match!');
      return;
    }

    register({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <label htmlFor="email">{locale === 'en' ? 'Name' : 'Nama'}</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
      />
      <label htmlFor="password">
        {locale === 'en' ? 'Confirm Password' : 'Konfirmasi Password'}
      </label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
