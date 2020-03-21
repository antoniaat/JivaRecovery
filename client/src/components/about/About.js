import React, { Component } from "react";

import "./About.scss";

import tlogo from "../../assets/images/tlogo.png";
import aboutBgImage from "../../assets/images/about-bg.jpg";

import icons from "../icons/FontAwesomeIcons";

import Benefit from "./benefits/Benefit.js";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      benefits: [
        {
          icon: icons.money,
          title: "Affordable Auto Prices",
          subtitle: "AutoDrive is nisi aliquip consequat duis velit esse"
        },
        {
          icon: icons.suitcase,
          title: "20 Years in Business",
          subtitle: "Vehicles is nisi aliquip consequat duis velit"
        },
        {
          icon: icons.puzzlePiece,
          title: "Trusted & Genuine Parts",
          subtitle: "Autos Drive is nisi aliquip consequat duis ted"
        }
      ]
    };
  }

  render() {
    return (
      <div className="About">
        <img src={tlogo} alt="logo"></img>
        <h2>About JivaTrade</h2>

        <section>
          <p className="lead">
            We offer high quality vehicles at unbelievable prices and creates
            pleasant buying experience.
          </p>
          <p>
            AutoImage is nisi aliquip consequat duis velit esse cillum dolore
            fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor sit
            amt consectetur adipisicing elit sed eiusmod tempor incididuntu
            labore et dolore magna aliqua enimad minim veniam quis nostrud
            exercitation ullamco laboris nisi aliquip. Duis aute irure dolor in
            reprehenderitn voluptate.
          </p>

          <article className="benefits-article">
            {this.state.benefits.map((object, i) => (
              <Benefit key={i} benefits={object}></Benefit>
            ))}
          </article>
        </section>

        <section>
          <img src={aboutBgImage} alt="about-img"></img>
        </section>
      </div>
    );
  }
}

export default About;
