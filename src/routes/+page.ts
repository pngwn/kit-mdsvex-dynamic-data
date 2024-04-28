const meta = import.meta.glob('../content/*/course.svx');

export async function load({ params }) {
	const courses = await Promise.all(
		Object.entries(meta).map(([k, v]) =>
			v().then((v) => [k.replace('../content/', '').replace('/course.svx', ''), v])
		)
	);

	return {
		courses: courses.map(([path, course]) => ({
			path,
			...course.metadata,
			content: course.default
		}))
	};
}

export const prerender = true;
