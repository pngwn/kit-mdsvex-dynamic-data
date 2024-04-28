<script>
	export let data;

	$: console.log({ data });

	$: course = data.course;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Learn to do the thing" />
</svelte:head>

<section>
	<svelte:component this={course.content} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.box {
		background-color: aliceblue;
		border-radius: 10px;
		padding: 1rem;
		margin: 1rem;
		text-align: center;
		box-shadow:
			0 1px 3px rgba(0, 0, 0, 0.12),
			0 1px 2px rgba(0, 0, 0, 0.24);
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}

	.box:hover {
		box-shadow:
			0 14px 28px rgba(0, 0, 0, 0.25),
			0 10px 10px rgba(0, 0, 0, 0.22);
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
</style>
