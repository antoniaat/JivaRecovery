import React from 'react';
import About from '../../components/about/about';
import PageHeader from '../../components/common/page-header/page-header';
import Partners from '../../components/partners/partners';

const AboutPage = () => (
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

export default AboutPage;
