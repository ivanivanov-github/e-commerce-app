import httpService from './http.service';

class AuthService {
    constructor() {
        this.httpService = httpService;
    }

    async checkPassword(passwordInput) {
        const validPass = await this.httpService.checkPassword(passwordInput);
        return validPass;
    }
}

const authService = new AuthService();
export default authService;