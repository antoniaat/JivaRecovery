import React, { useState, useEffect } from 'react';

import ContactForm from 'components/forms/contact/contact-form';
import PageHeader from 'components/common/page-header/page-header';
import MapContainer from '../map/map-container';

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
      <PageHeader title="Свържете се с нас" />
      <ContactForm />
      <MapContainer
        isMarkerShown={marker}
        onMarkerClick={handleMarkerClick}
      />
    </div>
  );
};

export default ContactPage;
