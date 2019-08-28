import React, { Component } from 'react';
import MapContainer from '../Map/MapContainer.js';
import ContactForm from '../../components/Forms/Contact/ContactForm.js';
import PageHeader from '../../components/Common/Header/Page-Header/PageHeader.js';

class ContactPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isMarkerShown: false,
            img: 'http://autoimage.templines.org/wp-content/uploads/2018/10/fbg.jpg',
            title: 'Contact Us'
        };
    }

    componentDidMount() {
        this.delayedShowMarker()
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }

    render() {
        return (
            <div className='ContactPage'>
                <div>
                    <PageHeader img={this.state.img} title={this.state.title}></PageHeader>
                </div>
                <section>
                    <ContactForm></ContactForm>
                </section>
                <section>
                    <MapContainer
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick} />
                </section>
            </div>
        )
    }
}

export default ContactPage;