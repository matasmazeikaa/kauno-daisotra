import { seo } from '../partials/seo';

const page = {
	file: 'content/pages/refrizeratoriu-deziu-priekabos.md',
	label: 'Refrizeratoriu deziu priekabos',
	name: 'refrizeratoriu-deziu-priekabos',
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
