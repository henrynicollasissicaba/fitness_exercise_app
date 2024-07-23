import { showErrorMessage } from "./alert.js";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '20dc5a31a4mshf87a0dfa5614fc8p1305a2jsn73b126e5f35f',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData = async (url) => {
    try {
        const response = await fetch(url, options)
        const data = await response.json()

        return data
    } catch (error){
        showErrorMessage(error)
    }
}