import { get } from "../data/crud.js";

class VehiclesService {
  constructor() {
    this.baseUrl = "https://localhost:5000";
    this.allVehiclesUrl = `${this.baseUrl}/auto-listing`;
  }

  getTopRatedVehicles() {
    return get(this.allVehiclesUrl);
  }
}

export default VehiclesService;
