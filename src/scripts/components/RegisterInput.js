import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../context/LocaleContext';

function RegisterInput({ register }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { locale, theme } = React.useContext(LocaleContext);

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    register({ name, email, password });
  }

  return (
    <form onSubmit={onSubmitHandler} className={`register-input ${theme === 'bright' ? '' : 'dark'}`}>
      <input
        type="text"
        placeholder={locale === 'id' ? 'Nama' : 'Name'}
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button type="submit">{locale === 'id' ? 'Daftar' : 'Register'}</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
