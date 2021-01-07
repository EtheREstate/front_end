import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MarketPlace from '../views/MarketPlace.vue';
import HousePage from '../views/HousePage.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/marketplace',
		name: 'marketplace',
		component: MarketPlace,
	},
	{
		path: '/housepage/:id',
		name: 'housePage',
		props: true,
		component: HousePage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
