const meta = import.meta.glob('../../../content/*/*.svx');

export async function load({ params }) {
	const filtered_courses = Object.entries(meta).filter(
		([k, v]) =>
			k.startsWith(`../../../content/${params.course}/${params.lesson}`) &&
			k.includes('.lesson.svx')
	);
	const courses = await Promise.all(
		filtered_courses.map(([k, v]) =>
			v().then((v) => [k.replace('../../../content/', '').replace('.lesson.svx', ''), v])
		)
	);

	return {
		course: { ...courses[0][1].metadata, content: courses[0][1].default }
	};
}

export const prerender = true;
