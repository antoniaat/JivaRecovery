import { post } from "../data/crud.js";

class AuthenticationService {
  constructor() {
    this.baseUrl = "https://localhost:5000/auth";
    this.loginUrl = `${this.baseUrl}/login`;
  }

  login(credentials) {
    return post(this.loginUrl, credentials);
  }
}

export default AuthenticationService;
