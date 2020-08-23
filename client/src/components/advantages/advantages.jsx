import './advantages.scss';

import React from 'react';
import imageIcons from '../icons/image-icons';
import Advantage from './advantage/advantage';
import AdvantagesHeader from './header/advantages-header';

const advantages = [
  {
    title: 'Доволни клиенти',
    text: 'Работим с клиенти от целият свят и се стараем винаги да доставяме бърза и качествена услуга.',
    img: imageIcons.dealership,
  },
  {
    title: 'Ниски цени',
    text: 'Ние ви помагаме да откриете най-ниските и достъпни цени за транспортната услуга от която имате нужда..',
    img: imageIcons.crane,
  },
  {
    title: 'Безопасност',
    text: 'Като доставчик на транспортни услуги и пътна помощ гарантираме честност и коректност.',
    img: imageIcons.safety,
  },
];

const Advantages = () => (
  <section className="advantages">
    <AdvantagesHeader />
    <article className="advantages-wrapper">
      {advantages.map(({ title, text, img }) => (
        <Advantage
          title={title}
          text={text}
          img={img}
        />
      ))}
    </article>
  </section>
);

export default Advantages;
