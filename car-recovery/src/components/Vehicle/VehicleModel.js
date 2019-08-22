import React from 'react';

import './VehicleModel.scss';

const VehicleModel = (props) => {
    return (
        <div className='VehicleModel'>
            <div>
                {/* {} */}
                if(props.vehicleModel) console.log(props.vehicleModel)

                {/* <p>{props.vehicleModel.name}</p>
                <p>{props.vehicleModel.offersCount}</p>
                <p>{props.vehicleModel.lowestPriceOffer}</p> */}
            </div>
        </div>
    );
}

export default VehicleModel;