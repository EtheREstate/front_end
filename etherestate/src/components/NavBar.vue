<template>
	<header>
		<span class="logo-text">EtheREstate.</span>
		<nav id="homepage-navbar">
			<ul id="homepage-navlinks">
				<li>
					<a>Marketplace</a>
				</li>
				<li><a>About Tokens</a></li>
				<li><a>Contact</a></li>
				<li><a>FAQ</a></li>
			</ul>
		</nav>
		<a class="etherestate-button-1">
			Log In
		</a>
	</header>
</template>

<script>
export default {
	name: 'NavBar',
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

#homepage-navlinks li a {
	cursor: pointer;
	transition: all 0.3s ease 0s;
	color: #578688;
}
#homepage-navlinks li a:hover {
	color: white;

	&::after {
		content: ' ';
		border-bottom: 5px solid #578688;
		border-radius: 10px;
		display: block;
	}
}
</style>
