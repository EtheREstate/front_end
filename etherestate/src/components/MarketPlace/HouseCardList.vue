<template>
	<Suspense>
		<template #default>
			<div class="house-card-wrapper">
				<section id="section1">
					<a href="#section3">{{ '<' }}</a>
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<a href="#section2">{{ '>' }}</a>
				</section>
				<section id="section2" v-if="false">
					<a href="#section1">{{ '<' }}</a>
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<a href="#section3">{{ '>' }}</a>
				</section>
				<section id="section3" v-if="false">
					<a href="#section2">{{ '<' }}</a>
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<HouseCard />
					<a href="#section1">{{ '>' }}</a>
				</section>
			</div>
		</template>
		<template #fallback> Loading ... </template>
	</Suspense>
</template>

<script>
import HouseCard from './HouseCard.vue';
import * as houseService from '../../service/houses.service.js';
export default {
	name: 'HouseCardList',
	components: { HouseCard },
	async setup() {
		let { data: houseListInfos } = await houseService.getHousesList();
		return {
			houseListInfos,
		};
	},
};
</script>

<style lang="scss" scoped>
.house-card-wrapper {
	display: grid;
	grid-template-columns: repeat(3, 100%);
	section {
		width: 100%;
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 20px 0;
		a {
			color: whitesmoke;
			text-decoration: none;
			font-size: 80px;
			background: #578688;
			width: 100px;
			padding: 20px;
			text-align: center;
			z-index: 1;
			&:nth-of-type(1) {
				align-self: start center;
				background: linear-gradient(
					-90deg,
					rgba(87, 134, 136, 0) 0%,
					rgba(87, 134, 136, 1) 100%
				);
			}
			&:nth-of-type(2) {
				align-self: end center;
				background: linear-gradient(
					90deg,
					rgba(87, 134, 136, 0) 0%,
					rgba(87, 134, 136, 1) 100%
				);
			}
		}
	}
}
</style>
