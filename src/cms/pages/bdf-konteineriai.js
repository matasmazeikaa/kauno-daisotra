import { seo } from '../partials/seo';

const page = {
	file: 'content/pages/bdf-konteineriai.md',
	label: 'BDF konteineriai',
	name: 'bdf-konteineriai',
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
