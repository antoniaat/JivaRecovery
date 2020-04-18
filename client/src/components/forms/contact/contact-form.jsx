import './contact-form.scss';

import React from 'react';
import Label from '../label';
import Textarea from '../textarea';
import Submit from '../submit';

const ContactForm = () => (
  <div className="contact-form">
    <h1>Свържете се с нас</h1>
    <p>
      <span> - </span>
      Тук сме, за да помогнем
      <span> - </span>
    </p>

    <form>
      <Label type="text" name="name" placeholder="ИМЕНА" />
      <Label type="email" name="email" placeholder="ИМЕЙЛ" />
      <Label type="number" name="phone" placeholder="ТЕЛЕФОН" />
      <Label type="text" name="subject" placeholder="ТЕМА" />
      <Textarea name="message" placeholder="СЪОБЩЕНИЕ" />
      <Submit />
    </form>
  </div>
);

export default ContactForm;
