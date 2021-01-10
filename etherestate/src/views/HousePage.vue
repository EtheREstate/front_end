<template>
	<Suspense>
		<template #default>
			<div>
				<div><HousePictures :pictures="pictures" /></div>
				<div>
					<HouseDetails
						:propertyHighlights="propertyHighlights"
						:financialHighlights="financialHighlights"
					/>
				</div>
			</div>
		</template>
		<template #fallback>
			<div>Loading ...</div>
		</template>
	</Suspense>
</template>

<script>
import HousePictures from '../components/HousePage/HousePictures.vue';
import HouseDetails from '../components/HousePage/HouseDetails.vue';
import * as houseService from '../service/houses.service.js';
export default {
	name: 'HousePage',
	components: { HousePictures, HouseDetails },
	props: {
		id: { type: String, required: true, default: '3' },
	},
	async setup(props) {
		let { data: houseInfos } = await houseService.getHouseDetails(props.id);
		// let picturesArray = [];
		// for (var i = 0; i < props.pictures.length; i++) {
		// 	const imageExist = await axios
		// 		.get(props.pictures[i])
		// 		.then(() => picturesArray.push(props.pictures[i]))
		// 		.catch(() =>
		// 			picturesArray.push('../../assets/pictures/DummyHouse.jpg')
		// 		);
		// }
		console.log(houseInfos);
		return {
			pictures: houseInfos.pictures,
			propertyHighlights: houseInfos.propertyHighlights,
			financialHighlights: houseInfos.financialHighlights,
		};
	},
};
</script>

<style lang="scss" scoped></style>
