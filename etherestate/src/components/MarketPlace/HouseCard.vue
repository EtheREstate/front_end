<template>
	<div class="house-card">
		<div
			class="house-card-image"
			:style="`background: url(${houseInfos.pictures[0]}) no-repeat 50% 50%`"
		></div>
		<div class="house-card-text">
			<span class="date">4 days ago</span>
			<h2>{{ houseInfos.propertyHighlights.city }}</h2>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sapiente
				optio assumenda, necessitatibus molestiae temporibus fuga est vitae.
			</p>
		</div>
		<div class="house-card-stats">
			<div class="stat right-border">
				<div class="type">Part minimum</div>
				<div class="value">
					€ {{ houseInfos.propertyHighlights.tokenPrice }}
				</div>
			</div>
			<div class="stat">
				<div class="type">Rentabilité</div>
				<div class="value">
					% {{ houseInfos.propertyHighlights.expectedYield }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HouseCard',
	props: ['houseInfos'],
};
</script>

<style lang="scss" scoped>
$itemGrow: 1.2;
$duration: 250ms;

.house-card {
	max-width: 300px;
	height: 500px;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 42% 42% 16%;
	grid-template-areas: 'image' 'text' 'stats';
	border-radius: 18px;
	background: whitesmoke;
	box-shadow: 5px 5px 15px rgba($color: #578688, $alpha: 0.9);
	text-align: center;
	transition: $duration all;
	&:hover {
		margin: 10px 10px;
		transform: scale($itemGrow);
	}
}

.house-card-image {
	grid-area: 'image';
	// background: url('../../assets/pictures/dummyHouse.jpg');
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	background-size: cover;
}
.house-card-text .date {
	color: #578688;
	font-size: 14px;
}
.house-card-text p {
	color: #000000;
	font-size: 15px;
	font-weight: 300;
}
.house-card-text h2 {
	color: #000000;
	font-size: 28px;
	margin-top: 0;
}
.house-card-text {
	z-index: 3;
	grid-area: 'text';
	margin: 25px;
}

.house-card-stats {
	grid-area: 'stats';
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	background: #77babd;
}
.house-card-stats .stat {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 10px;
	color: white;
}
.house-card-stats .type {
	font-size: 14px;
	font-weight: 300;
}
.house-card-stats .right-border {
	border-right: 1px solid white;
}
.house-card-stats .value {
	font-size: 20px;
	font-weight: 500;
}
</style>
