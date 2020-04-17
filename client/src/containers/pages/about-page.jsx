import React from 'react';
import About from 'components/about/about';
import PageHeader from 'components/common/page-header/page-header';
import Partners from 'components/partners/partners';

const AboutPage = () => (
  <>
    <PageHeader title="За нас" />
    <About />
    <Partners />
  </>
);

export default AboutPage;
