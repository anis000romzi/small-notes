import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import LocaleContext from '../context/LocaleContext';
import { login } from '../utils/network-data';

function LoginPage({ loginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  const onLoginHandler = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className="login-page">
      <h2>
        {locale === 'en'
          ? 'Please login to continue ...'
          : 'Silahkan login untuk melanjutkan ...'}
      </h2>
      <LoginInput login={onLoginHandler} />
      <p>
        {locale === 'en' ? "Don't have an account? " : 'Tidak punya akun? '}
        <Link to="/register">{locale === 'en' ? 'Register here!' : 'Daftar disini!'}</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
