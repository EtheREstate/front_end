<template>
	<div class="house-slider-wrapper">
		<!-- Image Slider start -->
		<div class="house-slider">
			<div class="house-slides">
				<!-- radio buttons start -->
				<input
					v-for="(pictureUrl, index) in picturesArray"
					type="radio"
					name="house-pic-radio-button"
					:id="`radio${index}`"
					:key="index"
					:value="`${index}`"
					@change="changeFirstImage"
				/>
				<!-- radio buttons end -->
				<!-- slide images start -->
				<div class="slide">
					<img :src="firstImage" alt="" />
				</div>
				<!-- slide images end -->
				<!-- automatic navigation start -->
				<div class="navigation-auto">
					<div
						v-for="(pictureUrl, index) in picturesArray"
						:key="index"
						:class="[`auto-btn${index}`]"
					></div>
				</div>
				<!-- automatic navigation end -->
				<!-- manual navigation start -->
				<div class="navigation-manual">
					<label
						v-for="(pictureUrl, index) in picturesArray"
						:for="`radio${index}`"
						:key="index"
						class="manual-btn"
					></label>
				</div>
				<!-- manual navigation end -->
			</div>
		</div>
		<!-- Image Slider end -->
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	name: 'HousePictures',
	props: {
		pictures: {
			type: Array,
			required: true,
			default: ['../../assets/pictures/DummyHouse.jpg'],
		},
	},
	setup(props) {
		let picturesArray = [...props.pictures];
		const firstImage = ref(picturesArray[0]);
		function changeFirstImage(event) {
			firstImage.value = picturesArray[event.target.value];
		}
		return { picturesArray, firstImage, changeFirstImage };
	},
};
</script>

<style lang="scss" scoped>
.house-slider-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(87, 134, 136, 0.7);
	border-radius: 15px;
	width: 800px;
	margin: auto;
}
.house-slider {
	width: 800px;
	height: 500px;
	border-radius: 15px;
	overflow: hidden;
}
.house-slides {
	width: 100%;
	height: 500px;
	display: flex;
	position: relative;
	input {
		display: none;
	}
}
.slide {
	width: 20%;
	transition: 2s;
	img {
		width: 800px;
		height: 500px;
	}
}
.navigation-manual {
	position: absolute;
	bottom: 20px;
	width: 800px;
	display: flex;
	justify-content: center;
	.manual-btn {
		border: 2px solid rgb(124, 193, 196);
		padding: 5px;
		border-radius: 10px;
		cursor: pointer;
		transition: 1s;
	}
	.manual-btn:not(:last-child) {
		margin-right: 40px;
	}
	.manual-btn:hover {
		background: #578688;
	}
}
</style>
