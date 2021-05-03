<template>
	<div>
		<div>The total token number is : {{ totalTokens }}</div>
		<div>The token left for sale number is : {{ tokensForSale }}</div>
		<form @submit.prevent="purchaseTokens">
			<input type="number" min="0" step="1" v-model="tokensToBuy" />
			<input type="submit" value="Buy Tokens" />
		</form>
		price : {{ price }} ether per token <br />
		amount : {{ (totalAmount = (tokensToBuy * price).toFixed(4)) }} ether
	</div>
</template>

<script>
import ImmoTokenSaleContract from '../contracts/ImmoTokenSale.json';
import ImmoTokenContract from '../contracts/ImmoToken.json';
import getWeb3 from '../getWeb3';
import { mapState, mapGetters } from 'vuex';
export default {
	name: 'BuyToken',
	data() {
		return {
			tokensForSale: null,
			totalTokens: null,
			tokensToBuy: 0,
			price: 0.0001,
			totalAmount: 0,
		};
	},
	async mounted() {
		try {
			// Get network provider and web3 instance.
			const web3 = await getWeb3();

			// Use web3 to get the user's accounts.
			const accounts = await web3.eth.getAccounts();

			// Get the contract instance.
			const networkId = await web3.eth.net.getId();

			const deployedSaleNetwork = ImmoTokenSaleContract.networks[networkId];
			const deployedErc20Network = ImmoTokenContract.networks[networkId];

			const ImmoTokenInstance = new web3.eth.Contract(
				ImmoTokenContract.abi,
				deployedErc20Network && deployedErc20Network.address
			);
			const ImmoTokenSaleInstance = new web3.eth.Contract(
				ImmoTokenSaleContract.abi,
				deployedSaleNetwork && deployedSaleNetwork.address
			);
			this.$store.dispatch('setWeb3', web3);
			this.$store.dispatch('setAccounts', accounts);
			this.$store.dispatch('setSaleContract', ImmoTokenSaleInstance);
			this.$store.dispatch('setErc20Contract', ImmoTokenInstance);
			this.totalTokens = await this.getTotalTokens;
			this.tokensForSale = await this.getTokensLeftForSale;
			if (!this.tokensForSale) {
				console.log('transfer not done');
				const transferStatus = await ImmoTokenInstance.methods
					.transfer(this.saleContract.options.address, this.totalTokens - 10)
					.send({ from: accounts[0] });
				this.$store.dispatch('transferDone', true);
			}
		} catch (error) {
			// Catch any errors for any of the above operations.
			alert(
				`Failed to load web3, accounts, or contract. Check console for details.`
			);
			console.error(error);
		}
	},
	computed: {
		...mapState([
			'web3',
			'accounts',
			'saleContract',
			'erc20Contract',
			'storageValue',
			'transferDone',
		]),
		...mapGetters(['getTotalTokens', 'getTokensLeftForSale']),
	},
	methods: {
		async purchaseTokens() {
			let purchase = {
				tokens: this.tokensToBuy,
				value: this.web3.utils.toWei(this.totalAmount.toString(), 'ether'),
			};
			this.$store.dispatch('buyTokens', purchase);
			this.tokensToBuy = 0;
		},
	},
};
</script>

<style lang="scss" scoped></style>
