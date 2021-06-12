import React from 'react';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import './Header.scss';
import HeaderMobileBurger from '@/components/HeaderMobileBurger';

export const NAVIGATION_LINKS = [
	{ to: '#pradzia', title: 'Pradzia' },
	{ to: '#apie-mus', title: 'Apie mus' },
	{ to: '#paslaugos', title: 'Paslaugos' },
	{ to: '#transportavimas', title: 'Transportavimas' },
	{ to: '#kodel-mes', title: 'Kodel mes' },
	{ to: '#kontaktai', title: 'Kontaktai' },
];

const Header = () => (
	<header className="header" id="header">
		<Logo />
		<nav className="header__nav-container">
			<ol className="header__links">
				{NAVIGATION_LINKS.map((link) => (
					<li key={link.title}>
						<Link title={link.title} href={link.to} />
					</li>
				))}
			</ol>
		</nav>
		<div className="header__language-selector">
			<Link className="mr-24" title="LT" href="/home" />
			<Link title="EN" href="/home" />
		</div>
		<HeaderMobileBurger />
	</header>
);
export default Header;
