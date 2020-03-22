import React from "react";
import AdvantagesHeader from "./header/AdvantagesHeader";

import "./Advantages.scss";
import imageIcons from "../icons/ImageIcons";
import Advantage from "./Advantage";

const Advantages = () => {
  return (
    <div className="advantages">
      <AdvantagesHeader />

      <article>
        <Advantage
          img={imageIcons.dealership}
          title="Голяма верига"
          text="Може да откриете най-голямата верига от доставчици на транспортни
            услуги и пътна помощ в България."
        />
        <Advantage
          img={imageIcons.prices}
          title="Ниски цени"
          text="Ние ви помагаме да откриете най-ниските и достъпни цени за транспортната услуга
          от която имате нужда.."
        />
        <Advantage
          img={imageIcons.safety}
          title="Безопасност"
          text="Всички доставчици на транспортни услуги и пътна помощ в платформата
          гарантират честност и коректност."
        />
      </article>
    </div>
  );
};

export default Advantages;
