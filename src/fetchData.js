import { showErrorMessage } from "./alert.js";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '31329064bfmshed2b61ee3d11922p1e5ec2jsnfc9265af1f8c',
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