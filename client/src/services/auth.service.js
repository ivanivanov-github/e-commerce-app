import httpService from './http.service';

class AuthService {
    constructor() {
        this.httpService = httpService;
    }

    async checkPassword(passwordInput) {
        const validPass = await this.httpService.checkPassword(passwordInput);
        return validPass;
        // try {
        //   const response = await fetch('http://localhost:5000/api/checkpassword', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({'id': passwordInput }) // body data type must match "Content-Type" header 
        //   })
        //   const ready = await response.json()
        //   return ready
        // } catch (error) { 
        //   console.log(error) 
        // }
    }
}

const authService = new AuthService();
export default authService;