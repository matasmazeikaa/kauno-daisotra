import home from './home';
import bdfKonteineriai from './bdf-konteineriai';
import bdfKonteineriaiEn from './bdf-konteineriai-en';
import itempiamosPriekabos from './itempiamos-priekabos';
import itempiamosPriekabosEn from './itempiamos-priekabos-en';
import konteineriuTransportavimas from './konteineriu-transportavimas';
import konteineriuTransportavimasEn from './konteineriu-transportavimas-en';
import pavojinguKroviniuTransportavimas from './pavojingu-kroviniu-transportavimas';
import pavojinguKroviniuTransportavimasEn from './pavojingu-kroviniu-transportavimas-en';
import deziuPriekabos from './refrizeratoriu-deziu-priekabos';
import deziuPriekabosEn from './refrizeratoriu-deziu-priekabos-en';

const pages = {
	name: 'pages',
	label: 'Pages',
	files: [
		home,
		bdfKonteineriai,
		bdfKonteineriaiEn,
		itempiamosPriekabos,
		itempiamosPriekabosEn,
		konteineriuTransportavimas,
		konteineriuTransportavimasEn,
		pavojinguKroviniuTransportavimas,
		pavojinguKroviniuTransportavimasEn,
		deziuPriekabos,
		deziuPriekabosEn,
	],
};

export default pages;
