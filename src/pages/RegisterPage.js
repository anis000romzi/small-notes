import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import LocaleContext from '../context/LocaleContext';
import { register } from '../utils/network-data';

function RegisterPage() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };

  return (
    <section className="register-page">
      <h2>
        {locale === 'en'
          ? 'Create your Small Notes account!'
          : 'Buat akun Small Notes kamu!'}
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        <Link to="/">
          {locale === 'en' ? 'Back to login' : 'Kembali ke login'}
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
