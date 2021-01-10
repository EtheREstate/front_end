<template>
	<div>
		<NavBar />
		<Suspense>
			<template #default>
				<router-view />
			</template>
			<template #fallback>
				<div>Loading ...</div>
			</template>
		</Suspense>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import MarketPlace from '@/views/MarketPlace.vue';
import HousePage from '@/views/HousePage.vue';
export default { components: { NavBar, MarketPlace, HousePage } };
</script>

<style lang="scss" scoped>
@import './assets/styles/main.css';
</style>
