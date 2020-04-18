import './login-form.scss';

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import userService from '../../../services/user-service';
import FormHeader from '../form-header/form-header';
import Label from '../label';
import Submit from '../submit';
import AdditionalLinks from '../additional-links';

const additionalLinks = [
  {
    link: '/home',
    text: 'ЗАБРАВЕНА ПАРОЛА?',
  },
  {
    link: '/register',
    text: 'НОВИ СТЕ ТУК?',
  },
];

const LoginForm = ({ history }) => {
  // const { auth, setAuth } = useContext(AuthContext);

  function handleFormSubmit() {
    // const user = { email, password };
    // userService.login(user).then((data) => {
    //   history.push('/home');
    //   // setAuth(true);
    // });
  }

  return (
    <div className="login-form">
      <FormHeader
        title="Вход"
        subtitle="Добавете вашите транспортни услуги в платформата"
      />

      <form onSubmit={handleFormSubmit}>
        <Label type="email" name="email" placeholder="ИМЕЙЛ" />
        <Label type="password" name="password" placeholder="ПАРОЛА" />
        <Submit value="ВХОД" />
        <AdditionalLinks links={additionalLinks} />
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
