import React from 'react';
import { NAVIGATION_LINKS } from '@/components/Header';
import Link from '@/components/Link';
import './Footer.scss';
import Logo from '@/components/Logo';

const Footer = () => (
	<footer className="footer">
		<div className="footer__logo-copyright-container">
			<Logo className="footer__logo" />
			<p className="footer__copyright text-left">2017 © UAB Kauno Daisotra. Visos teisės saugomos.</p>
		</div>
		<ul className="footer__links">
			{NAVIGATION_LINKS.map((link) => (
				<Link title={link.title} href={link.to} />
			))}
		</ul>
	</footer>
);

export default Footer;
