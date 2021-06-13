import home from './home';
import bdfKonteineriai from './bdf-konteineriai';
import itempiamosPriekabos from './itempiamos-priekabos';
import konteineriuTransportavimas from './konteineriu-transportavimas';
import pavojinguKroviniuTransportavimas from './pavojingu-kroviniu-transportavimas';
import deziuPriekabos from './refrizeratoriu-deziu-priekabos';

const pages = {
	name: 'pages',
	label: 'Pages',
	files: [home,
		bdfKonteineriai,
		itempiamosPriekabos,
		konteineriuTransportavimas,
		pavojinguKroviniuTransportavimas,
		deziuPriekabos,
	],
};

export default pages;
