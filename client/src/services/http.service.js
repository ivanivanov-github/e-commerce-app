const HTTPInterface = {
    SERVER_URL: 'http://localhost:5000/api',

    async POST(endpoint, data) {
        const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // const ready = await response.json();
        // return ready;
        return await response.json();
    }
}

class HTTPService {
    constructor() {
      this.passwordBaseUrl = 'password'
    }

    async checkPassword(passwordInput) {
        try {
          return await HTTPInterface.POST(`${this.passwordBaseUrl}`, {'id': passwordInput});
        } catch (error) { 
          console.log(error) 
        }

    }
}

const httpService = new HTTPService();
export default httpService;