import './advantages.scss';

import React from 'react';
import imageIcons from '../icons/ImageIcons';
import Advantage from './advantage/advantage';
import AdvantagesHeader from './header/advantages-header';

const advantages = [
  {
    title: 'Голяма верига',
    text: 'Може да откриете най-голямата верига от доставчици на транспортни услуги и пътна помощ в България.',
    img: imageIcons.dealership,
  },
  {
    title: 'Ниски цени',
    text: 'Ние ви помагаме да откриете най-ниските и достъпни цени за транспортната услуга от която имате нужда..',
    img: imageIcons.prices,
  },
  {
    title: 'Безопасност',
    text: 'Всички доставчици на транспортни услуги и пътна помощ в платформата гарантират честност и коректност.',
    img: imageIcons.safety,
  },
];

const Advantages = () => (
  <div className="advantages">
    <AdvantagesHeader />
    <article className="advantages-wrapper">
      {advantages.map(({ title, text, img }) => (
        <Advantage title={title} text={text} img={img} />
      ))}
    </article>
  </div>
);

export default Advantages;
