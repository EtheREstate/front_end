import axios from 'axios';

export const getHousesList = () => {
	return axios
		.get(`http://localhost:3000/HousesList`)
		.then((response) => response);
};
export const getHouseDetails = (id) => {
	return axios
		.get(`http://localhost:3000/HousesList/${id}`)
		.then((response) => {
			return response;
		});
};

export const checkPicture = (pictureUrl) => {
	return axios
		.get(pictureUrl)
		.then(() => pictureUrl)
		.catch(() => '../../assets/pictures/DummyHouse.jpg');
};
