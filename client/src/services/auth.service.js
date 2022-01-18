import httpService from "./http.service";

class AuthService {
  constructor() {
    this.httpService = httpService;
  }

  async checkPassword(passwordInfos) {
    const validPass = await this.httpService.checkPassword(passwordInfos);
    return validPass;
  }
}

const authService = new AuthService();
export default authService;
