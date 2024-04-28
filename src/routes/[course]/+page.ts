const meta = import.meta.glob('../../content/*/*.svx');

export async function load({ params }) {
	const filtered_courses = Object.entries(meta).filter(
		([k, v]) => k.startsWith(`../../content/${params.course}/`) && k.includes('.lesson.svx')
	);
	const courses = await Promise.all(
		filtered_courses.map(([k, v]) =>
			v().then((v) => [k.replace('../../content/', '').replace('.lesson.svx', ''), v])
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
