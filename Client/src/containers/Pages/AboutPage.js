import React, { Component } from "react";
import About from "../../components/Common/About/About.js";
import Brands from "../../components/Common/Brands/Brands.js";
import PageHeader from "../../components/Common/Header/Page-Header/PageHeader.js";

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
