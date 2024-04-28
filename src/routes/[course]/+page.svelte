<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Learn to do the thing" />
</svelte:head>

<section>
	<h1>Select your lesson</h1>
	<div class="welcome">
		{#each data.courses as course}
			<a href={course.path}>
				<div class="box">
					<h2>{course.title}</h2>
					<svelte:component this={course.content} />
				</div>
			</a>
		{/each}

		{#if data.courses.length === 0}
			<p>No courses available</p>
		{/if}
	</div>
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
