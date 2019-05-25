import axios from 'axios';

const unsplash = axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
		Authorization: "Client-ID e39f049a9a079c57e72e88e25e13ce86b783aa40d6ccaaab795b0789a5e21261"
	}
});

export default unsplash;