import React, { Component } from "react";
import About from "../../components/about/About.js";
import Brands from "../../components/brands/Brands.js";
import PageHeader from "../../components/common/header/page-header/PageHeader.js";

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "http://autoimage.templines.org/wp-content/uploads/2018/10/fbg.jpg",
      title: "About Us"
    };
  }

  render() {
    return (
      <div className="AboutPage">
        <div>
          <PageHeader
            img={this.state.img}
            title={this.state.title}
          ></PageHeader>
        </div>

        <About></About>
        <Brands></Brands>
      </div>
    );
  }
}

export default AboutPage;
