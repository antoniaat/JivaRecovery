import React from "react";
import Benefit from "./benefits/Benefit.js";

import "./About.scss";
import icons from "../icons/FontAwesomeIcons";

import tlogo from "../../assets/images/tlogo.png";
import aboutBgImage from "../../assets/images/about-bg.jpg";

const About = () => {
  const benefits = [
    {
      icon: icons.money,
      title: "Добри цени",
      subtitle: "Тук може да намерите едни от най-добрите цени"
    },
    {
      icon: icons.suitcase,
      title: "Доверили се клиенти",
      subtitle: "Благодарим на всички доверили се клиенти"
    },
    {
      icon: icons.puzzlePiece,
      title: "Голяма верига",
      subtitle: "Най-голямата верига от доставчици"
    }
  ];

  return (
    <div className="About">
      <img src={tlogo} alt="logo"></img>
      <h2>За нас</h2>
      <section>
        <p className="lead">
          Ние предлагаме висококачествени транспортни услуги и пътна помощ на
          невероятни цени.
        </p>
        <p>
          Предлагаме услуги, свързани с товарен транспорт по направления в
          София, страната и чужбина. Разчитаме на опита си и надеждния автопарк,
          за да предложим качествена и точна услуга. През годините сме
          превозвали много товари на фирми, партньори и частни лица и знаем, че
          всички очакват бързина, точност и добра цена, независимо от характера
          на пратката.
        </p>
        <article className="benefits-article">
          {benefits.map((item, i) => (
            <Benefit key={i} benefits={item} />
          ))}
        </article>
      </section>

      <section>
        <img src={aboutBgImage} alt="about-img"></img>
      </section>
    </div>
  );
};

export default About;
