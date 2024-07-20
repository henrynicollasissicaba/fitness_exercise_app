import { showErrorMessage } from "./alert.js";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.EXERCISE_API_KEY,
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