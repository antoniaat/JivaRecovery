import React from 'react';
import About from 'components/about/about';
import PageHeader from 'components/common/page-header/page-header';
import Partners from 'components/partners/partners';

const AboutPage = () => (
  <>
    <PageHeader title="За нас" />
    <About mainTitle="За нас" mainSubtitle="Ние предлагаме висококачествени транспортни услуги и пътна помощ на невероятни цени." description="Предлагаме услуги, свързани с товарен транспорт по направления в София, страната и чужбина. Разчитаме на опита си и надеждния автопарк, за да предложим качествена и точна услуга. През годините сме превозвали много товари на фирми, партньори и частни лица и знаем, че всички очакват бързина, точност и добра цена, независимо от характера на пратката." />
    <Partners />
  </>
);

export default AboutPage;
