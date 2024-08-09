class TutorialService {


    baseURL = 'http://localhost:3000/tutorials';

    async getAll() {
        const response = await fetch(this.baseURL);
        return await response.json();
    }
}

export default new TutorialService();
