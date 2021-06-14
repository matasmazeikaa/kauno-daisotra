import { seo } from '../partials/seo';

const page = {
	file: 'content/pages/pavojingu-kroviniu-transportavimas.md',
	label: 'Pavojingu kroviniu transportavimas',
	name: 'pavojingu-kroviniu-transportavimas',
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
