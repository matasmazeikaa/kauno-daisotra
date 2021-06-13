import { seo } from '../partials/seo';

const page = {
	file: 'content/pages/itempiamos-priekabos.md',
	label: 'Home',
	name: 'home',
	fields: [
		{
			label: 'Hero section',
			name: 'heroSection',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
			],
		},
		seo,
	],
};

export default page;
