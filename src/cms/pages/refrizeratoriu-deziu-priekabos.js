import { background } from '../partials/background';
import { image } from '../partials/image';
import { seo } from '../partials/seo';
import button from '../partials/button';

const page = {
	file: 'content/pages/refrizeratoriu-deziu-priekabos.md',
	label: 'Refrizeratoriu deziu priekabos',
	name: 'refrizeratoriu-deziu-priekabos',
	fields: [
		{
			label: 'Hero section',
			name: 'hero',
			widget: 'object',
			collapsed: true,
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				button,
				background(),
				image(),
			],
		},
		{
			label: 'Info section',
			name: 'infoSection',
			widget: 'object',
			collapsed: true,
			fields: [
				image(),
				background(),
				{
					label: 'Description',
					name: 'description',
					widget: 'markdown',
					modes: ['rich_text'],
				},
			],
		},
		seo,
	],
};

export default page;
