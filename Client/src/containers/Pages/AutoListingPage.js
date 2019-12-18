import React, { Fragment, Component } from "react";
// import vehicleService from "../../services/vehicleService.js";
// import VehicleModel from "../../components/Vehicle/VehicleModel.js";

class AutoListingPage extends Component {
  state = {
    vehicles: [],
    isLoading: false
  };

  render() {
    const { vehicles, isLoading } = this.state;

    if (isLoading) {
      return <div>loaded successfuly</div>;
    }

    if (vehicles.length && !isLoading) {
      return (
        <div>
          <h1>No vehicles :(</h1>
        </div>
      );
    }

    return (
      <Fragment>
        <h2>Top rated</h2>
        <div>
          {console.log(vehicles)}
          {/* {vehicles.map(vehicle => {
            <VehicleModel key={vehicle.id} {...vehicle} />;
          })} */}
        </div>
      </Fragment>
    );
  }

  async componentDidMount() {
    try {
      const vehicles = await AutoListingPage.service.getTopRatedVehicles();
      this.setState({ vehicles });
    } catch (error) {
      console.error(error);
    }
  }
}

export default AutoListingPage;
