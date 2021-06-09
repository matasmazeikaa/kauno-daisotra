import React from 'react';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import './Header.scss';

export const NAVIGATION_LINKS = [
	{ to: '/about', title: 'Pradzia' },
	{ to: '/about', title: 'Apie mus' },
	{ to: '/about', title: 'Paslaugos' },
	{ to: '/about', title: 'Transportavimas' },
	{ to: '/about', title: 'Kodel mes' },
	{ to: '/about', title: 'Kotnaktai' },
];

const Header = () => (
	<header className="header">
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
	</header>
);
export default Header;
