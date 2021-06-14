export const background = (imageName) => ({
	label: imageName || 'Image',
	name: 'background',
	widget: 'object',
	collapsed: true,
	fields: [
		{
			label: 'Image',
			name: 'image',
			widget: 'image',
			allow_multiple: false,
		},
		{ label: 'Alt text', name: 'alt', widget: 'string' },
	],
});
