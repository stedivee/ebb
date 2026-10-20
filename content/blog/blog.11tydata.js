export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	permalink: "/blog/{{ page.date | suomiPvmURL }}-{{ page.fileSlug }}/",
};
