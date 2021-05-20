<template>
	<div>
		<form @submit.prevent="register">
			<label for="first_name">
				first_name:
			</label>
			<input v-model="first_name" type="text" name="first_name" value />
			<label for="name">
				last_name:
			</label>
			<input v-model="last_name" type="text" name="last_name" value />

			<label for="email">
				Email:
			</label>
			<input v-model="email" type="email" name="email" value />

			<label for="password">
				Password:
			</label>
			<input v-model="password" type="password" name="password" value />

			<button type="submit" name="button">
				Register
			</button>
		</form>
		<div v-if="listOfErrors">
			<li v-for="error in listOfErrors">{{ error }}</li>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'RegisterUser',
	computed: { ...mapState(['user']) },
	data() {
		return {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			listOfErrors: null,
		};
	},
	methods: {
		async register() {
			const ip_address = await this.$store.dispatch('getIpAddress');
			this.$store
				.dispatch('register', {
					first_name: this.first_name,
					last_name: this.last_name,
					email: this.email,
					password: this.password,
					ip_address: ip_address,
				})
				.then(() => {
					if (this.user.registerErrors) {
						this.listOfErrors = this.user.registerErrors;
					} else {
						this.$router.push({ name: 'UserBoard' });
					}
				});
		},
	},
};
</script>

<style></style>
