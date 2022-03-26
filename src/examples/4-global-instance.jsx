import { useEffect } from 'react';
import axios from 'axios';
const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
	const fetchData = async () => {
		const resp1 = await axios.get(productsUrl);
		const resp2 = await axios.get(randomUserUrl);
		console.log(resp2);
		console.log(resp1);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
