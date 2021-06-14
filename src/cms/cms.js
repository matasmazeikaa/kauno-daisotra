import CMS from 'netlify-cms-app';
import pages from './pages';

CMS.init({
	config: {
		load_config_file: false,
		backend: {
			name: 'git-gateway',
			branch: 'main',
		},
		media_folder: '/img',
		public_folder: '/img',
		collections: [pages],
	},
});
