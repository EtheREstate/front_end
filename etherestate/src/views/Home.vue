<template>
	<Suspense>
		<template #default>
			<div>
				<div class="section-1">
					<div class="rellax parallax-el" data-rellax-speed="2"></div>
					<div class="rellax landing-title" data-rellax-speed="10"></div>
					<div class="rellax landing-sub-title" data-rellax-speed="10"></div>
					<div class="rellax clouds" data-rellax-speed="8"></div>
				</div>
				<div class="section-2">
					<div class="section-2-whitespace"></div>
					<div class="rellax section-2-content" data-rellax-speed="12">
						<HouseCardList />
					</div>
				</div>
			</div>
		</template>
		<template #fallback> Loading ... </template>
	</Suspense>
</template>

<script>
import HouseCardList from '../components/MarketPlace/HouseCardList.vue';
import HouseCard from '../components/MarketPlace/HouseCard.vue';
import Rellax from 'rellax';

export default {
	name: 'Home',
	components: { HouseCardList, HouseCard },
	mounted() {
		var rellax = new Rellax('.rellax');
	},
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
.parallax-el {
	background: url('../assets/pictures/foreground-clouded.png') no-repeat 50% 50%;
	background-size: contain;
	position: absolute;
	width: 100%;
	height: 70%;
	top: 30%;
}
.landing-title {
	background: url('../assets/pictures/title.png') no-repeat 50% 50%;
	background-size: contain;
	width: 80%;
	height: 15%;
	position: absolute;
	top: 25%;
	left: 10%;
}
.landing-sub-title {
	background: url('../assets/pictures/catchPhrase.png') no-repeat 50% 50%;
	background-size: contain;
	width: 35%;
	height: 15%;
	position: absolute;
	top: 36%;
	left: 32.5%;
}
.clouds {
	background: url('../assets/pictures/cloud.png') no-repeat 50% 50%;
	background-size: cover;
	position: absolute;
	width: 100%;
	height: 100vh;
}
.section-2-whitespace {
	width: 100%;
	height: 100vh;
	z-index: 300;
}
.section-2-content {
	background: whitesmoke;
	height: 100vh;
	width: 100%;
	margin: 0 auto;
	padding: 80px 0;
	position: absolute;
	z-index: 1000;
}
</style>
