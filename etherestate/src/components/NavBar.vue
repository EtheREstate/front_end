<template>
	<header>
		<router-link :to="{ name: 'Home' }" :class="'logo-text'"
			>EtheRente.</router-link
		>
		<nav id="homepage-navbar">
			<ul id="homepage-navlinks">
				<li>
					<router-link :to="{ name: 'Marketplace' }" :class="'navlinks'"
						>Marketplace</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Marketplace' }" :class="'navlinks'"
						>About Tokens</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Marketplace' }" :class="'navlinks'"
						>Contact</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'Marketplace' }" :class="'navlinks'"
						>FAQ</router-link
					>
				</li>
			</ul>
		</nav>
		<a class="etherestate-button-1">
			<router-link
				:to="{ name: 'Register' }"
				style="text-decoration: none; color: inherit;"
				>LOG IN</router-link
			>
		</a>
	</header>
</template>

<script>
export default {
	name: 'NavBar',
	setup() {
		function goMarketPlace() {
			console.log('click emitted');
			router.push({ name: 'Marketplace' });
		}
		return { goMarketPlace };
	},
	method() {},
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.css';
#homepage-navbar {
	width: 40%;
}
#homepage-navlinks {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	list-style: none;
	margin: 2vh auto 0 auto;
}

.navlinks {
	cursor: pointer;
	transition: all 0.3s ease 0s;
	color: #578688;
}
.navlinks:visited {
	color: #578688;
}
.navlinks:hover {
	color: white;

	&::after {
		content: ' ';
		border-bottom: 5px solid #578688;
		border-radius: 10px;
		display: block;
	}
}
</style>
