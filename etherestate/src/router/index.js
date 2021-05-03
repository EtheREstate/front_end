import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MarketPlace from '../views/MarketPlace.vue';
import HousePage from '../views/HousePage.vue';
import BuyToken from '../views/BuyToken.vue';
import RegisterUser from '../views/RegisterUser.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/marketplace',
		name: 'Marketplace',
		component: MarketPlace,
	},
	{
		path: '/housepage/:id',
		name: 'HousePage',
		props: true,
		component: HousePage,
	},
	{
		path: '/buytoken/:id',
		name: 'BuyToken',
		props: true,
		component: BuyToken,
	},
	{
		path: '/user/register',
		name: 'Register',
		component: RegisterUser,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
