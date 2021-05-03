import axios from 'axios';

export const state = {};
export const mutations = {};
export const actions = {
	register({ commit }, credentials) {
		return axios
			.post('//localhost:8081/register', credentials)
			.then(console.log);
	},
};
export const getters = {};
