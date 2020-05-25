import React, { useState, useEffect } from 'react';

import ContactForm from 'components/forms/contact/contact-form';
import PageHeader from 'components/common/page-header/page-header';
import MapContainer from '../map/map-container';
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";

const ContactPage = () => {
  const [marker, isMarkerShown] = useState(false);

  function delayedShowMarker() {
    setTimeout(() => {
      isMarkerShown(!marker);
    }, 3000);
  }

  useEffect(() => {
    delayedShowMarker();
  });

  function handleMarkerClick() {
    isMarkerShown(!marker);
    delayedShowMarker();
  }

  return (
    <div className="contact-page">
      <TopBar/>
      <Navbar/>
      <PageHeader title="Свържете се с нас" />
      <ContactForm />
      <MapContainer
        isMarkerShown={marker}
        onMarkerClick={handleMarkerClick}
      />
      <Footer/>
    </div>
  );
};

export default ContactPage;
