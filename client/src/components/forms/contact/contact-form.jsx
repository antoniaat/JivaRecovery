import './contact-form.scss';

import React from 'react';
import Label from '../label';
import Textarea from '../textarea';
import Submit from '../submit';

const ContactForm = () => (
  <div className="contact-form">
    <h1 className="contact-form-title">Свържете се с нас</h1>
    <p className="contact-form-subtitle">
      <span className="contact-form-subtitle-line"> - </span>
      Тук сме, за да помогнем
      <span className="contact-form-subtitle-line"> - </span>
    </p>

    <form>
      <Label className="name-label" type="text" name="name" placeholder="ИМЕНА" />
      <Label type="email" name="email" placeholder="ИМЕЙЛ" />
      <Label className="phone-label" type="number" name="phone" placeholder="ТЕЛЕФОН" />
      <Label type="text" name="subject" placeholder="ТЕМА" />
      <Textarea name="message" placeholder="СЪОБЩЕНИЕ" />
      <Submit />
    </form>
  </div>
);

export default ContactForm;
