<template>
	<Suspense>
		<template #default>
			<div>
				<HouseCardList /></div
		></template>
		<template #fallback> Loading ... </template>
	</Suspense>
</template>

<script>
import HouseCardList from '../components/MarketPlace/HouseCardList.vue';
import HouseCard from '../components/MarketPlace/HouseCard.vue';
export default {
	name: 'Home',
	components: { HouseCardList, HouseCard },
};
</script>

<style lang="scss" scoped>
#landing-image {
	width: 100%;
	padding-top: 3em;
	margin: 3em auto auto auto;
	opacity: 0.7;
	position: absolute;
}
</style>
