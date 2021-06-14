import { background } from '../partials/background';
import { image } from '../partials/image';
import { seo } from '../partials/seo';
import button from '../partials/button';

const page = {
	file: 'content/pages/refrizeratoriu-deziu-priekabos-en.md',
	label: 'Refrizeratoriu deziu priekabos english',
	name: 'refrizeratoriu-deziu-priekabos-en',
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
					label: 'Points',
					name: 'points',
					widget: 'list',
					fields: [{ label: 'Description', name: 'description', widget: 'string' }],
				},
			],
		},
		seo,
	],
};

export default page;
