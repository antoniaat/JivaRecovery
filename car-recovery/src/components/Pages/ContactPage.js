import React from "react";
import MapContainer from '../../containers/Map/MapContainer.js';

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
            <MapContainer
                isMarkerShown={this.state.isMarkerShown}
                onMarkerClick={this.handleMarkerClick} />
        )
    }
}

export default ContactPage;