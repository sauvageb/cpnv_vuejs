class CategoryService {

    baseURL = 'http://localhost:3000/categories';

    async getAll() {
        const response = await fetch(this.baseURL);
        return await response.json();
    }

    async add(categoryName) {
        const response = await fetch(this.baseURL, {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({name: categoryName})
        });
        return response.ok;
    }
}

export default new CategoryService();
