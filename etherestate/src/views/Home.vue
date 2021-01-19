<template>
	<Suspense>
		<template #default>
			<div>
				<div class="section-1">
					<div class="rellax parallax-el" data-rellax-speed="4"></div>
					<div class="rellax landing-title" data-rellax-speed="10"></div>
					<div class="rellax landing-sub-title" data-rellax-speed="6"></div>
					<div class="rellax clouds" data-rellax-speed="8"></div>
				</div>
				<div class="section-2">
					<div class="section-2-whitespace"></div>
					<div class="rellax section-2-content" data-rellax-speed="12">
						<h2>Rentier avec 50€</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
							egestas ex. Nam eget est vel est fringilla placerat. Nullam ac
							vestibulum lectus, quis finibus lorem. Integer rhoncus dolor sem,
							id blandit est mollis ut. Nulla in tortor vitae erat volutpat
							faucibus sed non ex. Phasellus nulla arcu, feugiat eget tellus sit
							amet, hendrerit rutrum nisl. Nam vel ante et mi faucibus faucibus.
							Etiam accumsan fringilla magna sit amet lobortis. Sed feugiat
							augue ut pulvinar luctus. Aliquam ullamcorper eu nibh at
							tincidunt. Pellentesque mollis vel nulla at consectetur.
						</p>
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
import Rellax from 'rellax';

export default {
	name: 'Home',
	components: { HouseCardList },
	mounted() {
		var rellax = new Rellax('.rellax');
	},
};
</script>

<style lang="scss" scoped>
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
}
.section-2-content {
	background: whitesmoke;
	height: 100vh;
	width: 100%;
	padding: 20px;
	position: absolute;
	z-index: 1000;
	h2 {
		width: 30%;
		margin: 50px 0 0 50px;
		font-size: 40px;
		color: #578688;
		border-bottom: 3px solid #578688;
		display: block;
	}
	p {
		width: 60%;
		padding: 20px 0 40px 60px;
		text-align: left;
		text-indent: 20px;
		line-height: 1.5;
	}
}
</style>
