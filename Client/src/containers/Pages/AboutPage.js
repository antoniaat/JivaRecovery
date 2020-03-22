import React from "react";
import About from "../../components/about/About.js";
import PageHeader from "../../components/common/header/page-header/PageHeader.js";
import Partners from "../../components/partners/Partners.js";

const AboutPage = () => {
  return (
    <>
      <div>
        <PageHeader
          img="http://autoimage.templines.org/wp-content/uploads/2018/10/fbg.jpg"
          title="About Us"
        />
      </div>
      <About />
      <Partners />
    </>
  );
};

export default AboutPage;
