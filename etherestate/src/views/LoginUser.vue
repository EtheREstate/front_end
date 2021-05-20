<template>
	<div>
		<form @submit.prevent="login">
			<label for="email">
				Email:
			</label>
			<input v-model="email" type="email" name="email" value />

			<label for="password">
				Password:
			</label>
			<input v-model="password" type="password" name="password" value />

			<button type="submit" name="button">
				Login
			</button>
		</form>
		if not registered please register
		<a
			><router-link
				:to="{ name: 'Register' }"
				style="text-decoration: none; color: blue;"
				>here</router-link
			>
		</a>
		<div v-if="listOfErrors">
			<li v-for="error in listOfErrors">{{ error }}</li>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'LoginUser',
	computed: { ...mapState(['user']) },
	data() {
		return {
			email: '',
			password: '',
			listOfErrors: null,
		};
	},
	methods: {
		login() {
			this.$store
				.dispatch('login', {
					email: this.email,
					password: this.password,
				})
				.then(() => {
					if (this.user.loginErrors) {
						this.listOfErrors = this.user.loginErrors;
						this.email = '';
						this.password = '';
					} else {
						this.$router.push({ name: 'UserBoard' });
					}
				});
		},
	},
};
</script>

<style lang="scss" scoped></style>
