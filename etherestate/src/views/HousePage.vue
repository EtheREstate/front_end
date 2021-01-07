<template>
	{{ $route.params.id }}
	<Suspense>
		<template #default>
			<div>
				<div><HousePictures :pictures="pictures" /></div>
				<div>
					<HouseDetails
						:propertyHighlights="propertyHighlights"
						:financialHighlights="financialHighlights"
					/>
				</div></div
		></template>
		<template #fallback> Loading ... </template>
	</Suspense>
</template>

<script>
import HousePictures from '../components/HousePage/HousePictures.vue';
import HouseDetails from '../components/HousePage/HouseDetails.vue';
import axios from 'axios';
export default {
	name: 'HousePage',
	components: { HousePictures, HouseDetails },
	props: {
		id: { type: String, required: true, default: '3' },
	},
	async setup(props) {
		console.log(props.id);
		let { data: houseInfos } = await axios.get(
			`http://localhost:3000/HousesList/${props.id}`
		);
		return {
			pictures: houseInfos.pictures,
			propertyHighlights: houseInfos.propertyHighlights,
			financialHighlights: houseInfos.financialHighlights,
		};
	},
};
</script>

<style lang="scss" scoped></style>
