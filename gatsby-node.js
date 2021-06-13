const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
	if (stage === 'build-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /@splidejs/,
						use: loaders.null(),
					},
				],
			},
		});
	}

	actions.setWebpackConfig({
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
		},
	});
};

exports.onCreateNode = ({ node }) => {
	fmImagesToRelative(node);
};
