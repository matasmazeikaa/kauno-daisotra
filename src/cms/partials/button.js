const button = {
	label: 'Button',
	name: 'button',
	widget: 'object',
	collapsed: true,
	required: true,
	fields: [
		{
			label: 'Button text', name: 'title', widget: 'string', required: true,
		},
		{
			label: 'Button link to', name: 'to', widget: 'string', required: true,
		},
	],
};

export default button;
