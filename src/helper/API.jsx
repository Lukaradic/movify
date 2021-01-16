const endpoint = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com'
const key = '47f12bc0fcmsh1e8241ff8e2313ep160292jsn1a2519eae5b2'

export default class API {
    static get(path) {
        // const headers = new Headers({
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json',
        //     Authorization: `Bearer ${this.key}`
        // })
        return fetch(`${endpoint}${path}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': key,
                'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
            }
        }).then((response) => response.json())
    }

    static post(path) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${this.key}`
        })
        return fetch(`${this.endpoint}${path}`, { method: 'POST', headers }).then((response) =>
            response.json()
        )
    }
}
