import React from "react";
import MapContainer from '../../containers/Map/MapContainer.js';
import ContactForm from '../Forms/Contact/ContactForm.js';

class ContactPage extends React.PureComponent {
    state = {
        isMarkerShown: false,
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
                <section>
                    <MapContainer
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick} />
                </section>
                <section>
                    <ContactForm></ContactForm>
                </section>
            </div>
        )
    }
}

export default ContactPage;