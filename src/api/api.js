import axios from 'axios';

const authFetch = axios.create({
	baseURL: 'https://course-api.com/',
	headers: {
		accept: 'application/json',
	},
});

export default authFetch;
