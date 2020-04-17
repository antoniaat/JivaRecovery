import React, { useState } from "react";
import icons from "../icons/FontAwesomeIcons";

const Advantage = ({ img, title, text }) => {
  const [active, setActive] = useState(true);

  return (
    <div
      onClick={() => setActive(!active)}
      className={active ? "active" : "not-active"}
    >
      <img src={img} alt={`${img}-img`}></img>
      <h5>{title}</h5>
      <p>{text}</p>
      <button>{icons.arrowUp}</button>
    </div>
  );
};

export default Advantage;
