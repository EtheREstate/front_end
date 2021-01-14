<template>
	<Suspense>
		<template #default>
			<div>
				<div><HousePictures :pictures="pictures" /></div>
				<div>
					<HouseDetails
						:houseId="houseId"
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
		let picturesArray = [];
		for (var i = 0; i < houseInfos.pictures.length; i++) {
			// const imageExist = await houseService.checkPicture(
			// 	houseInfos.pictures[i]
			// );
			picturesArray.push(houseInfos.pictures[i]);
		}
		return {
			houseId: houseInfos.id,
			pictures: picturesArray,
			propertyHighlights: houseInfos.propertyHighlights,
			financialHighlights: houseInfos.financialHighlights,
		};
	},
};
</script>

<style lang="scss" scoped></style>
