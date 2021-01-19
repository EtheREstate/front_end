<template>
	<div class="house-big-card">
		<div
			class="house-big-card-image"
			:style="`background: url(${picture}) no-repeat 50% 50%`"
		></div>
		<div class="house-big-card-text">
			<div class="address">
				<h2>{{ propertyHighlights.address }}</h2>
			</div>
			<div class="prices">
				<div class="total-price">
					<h2>Total Price</h2>
					<span>€ {{ financialHighlights.totalInvestment }}</span>
				</div>
				<div class="token-price">
					<h2>Token Price</h2>
					<span>€ {{ propertyHighlights.tokenPrice }}</span>
				</div>
			</div>
			<div class="details">
				<div class="expected-yld detail-row">
					<div class="row-text">Expected Yield</div>
					<div class="row-value">{{ financialHighlights.expectedYield }} %</div>
				</div>
				<div class="detail-row">
					<div class="row-text">Gross Rent</div>
					<div class="row-value">
						€ {{ financialHighlights.grossRentPerYear }} / year
					</div>
				</div>
				<div class="detail-row">
					<div class="row-text">Rent Per Token</div>
					<div class="row-value">
						€ {{ propertyHighlights.rentperToken }} / year
					</div>
				</div>
			</div>
			<div class="buy-button ">
				<router-link :to="{ name: 'HousePage', params: { id: id } }"
					><button class="etherestate-button-1">
						view property
					</button></router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HouseBigCard',
	props: {
		houseInfos: {
			propertyHighlights: {
				type: Object,
				required: true,
				default: {
					address: 'will be released soon',
					expectedYield: 'will be released soon',
					rentStartDate: 'will be released soon',
					rentperToken: 'will be released soon',
					tokenPrice: 'will be released soon',
					totalTokens: 'will be released soon',
					propertyType: 'will be released soon',
					neighborhood: 'will be released soon',
					squareFeet: 'will be released soon',
					lotSize: 'will be released soon',
					'bedroom/Bath': 'will be released soon',
					rented: 'will be released soon',
					section8: 'will be released soon',
				},
			},
			financialHighlights: {
				type: Object,
				required: true,
				default: {
					grossRentPerYear: 'will be released soon',
					grossRentPerMonth: 'will be released soon',
					monthlyCosts: 'will be released soon',
					netRentPerMonth: 'will be released soon',
					netRentPerYear: 'will be released soon',
					totalInvestment: 'will be released soon',
					expectedYield: 'will be released soon',
					maintenanceReserve: 'will be released soon',
					totalPrice: 'will be released soon',
				},
			},
		},
	},
	setup(props) {
		return {
			id: props.houseInfos.id,
			propertyHighlights: props.houseInfos.propertyHighlights,
			financialHighlights: props.houseInfos.financialHighlights,
			picture: props.houseInfos.pictures[0],
		};
	},
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.css';

$itemGrow: 1.05;
$duration: 250ms;
.house-big-card {
	width: 100%;
	height: 350px;
	margin: 20px;
	border-radius: 18px;
	display: grid;
	grid-template-columns: 60% 40%;
	grid-template-areas: 'image text';
	background: whitesmoke;
	box-shadow: 5px 5px 15px rgba($color: #578688, $alpha: 0.9);
	text-align: center;
	transition: $duration all;
	&:hover {
		margin: 20px;
		transform: scale($itemGrow);
	}
	.house-big-card-image {
		border-top-left-radius: 18px;
		border-bottom-left-radius: 18px;
		grid-area: 'image';
		background-size: cover;
	}
	.house-big-card-text {
		grid-area: 'text';
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 20% 30% 30% 20%;
		grid-template-areas: 'address' 'prices' 'details' 'buy-button';
		.address {
			grid-area: 'address';
			border-top-right-radius: 18px;

			h2 {
				color: #578688;
				font-size: 20px;
				position: relative;
				top: 30%;
			}
		}
		.prices {
			grid-area: 'prices';
			display: grid;
			grid-template-columns: 50% 50%;
			background: rgba($color: #578688, $alpha: 0.3);
			h2 {
				color: #578688;
				font-size: 20px;
				position: relative;
				top: 10%;
			}
			span {
				color: #f2ffff;
				font-size: 20px;
				position: relative;
				top: 20%;
				background: rgb(255, 153, 37);
				box-shadow: 5px 5px 15px rgba($color: #578688, $alpha: 0.6);
				padding: 5px;
			}
			.total-price {
				border-right: 1px solid white;
			}
		}
		.details {
			grid-area: 'details';
			display: grid;
			grid-template-rows: 1fr 1fr 1fr;
			.detail-row {
				padding: 10px;
				font-size: 14px;
				display: grid;
				grid-template-columns: 60% 40%;
				grid-template-areas: 'text' 'value';
				width: 100%;
				border-bottom: 1px solid rgba($color: #578688, $alpha: 0.5);
				.row-value {
					grid-area: 'value';
					display: flex;
					justify-content: flex-end;
				}
				.row-text {
					grid-area: 'text';
					display: flex;
					justify-content: flex-start;
				}
			}
			.expected-yld {
				font-size: 18px;
			}
		}
		.buy-button {
			grid-area: 'buy-button';
			border-bottom-right-radius: 18px;
			display: flex;
			align-content: center;
			justify-content: center;
			button {
				position: relative;
				top: 30%;
				height: 60%;
				border: none;
			}
		}
	}
}
</style>
