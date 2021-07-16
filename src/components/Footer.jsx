import React from 'react';
import {
	NAVIGATION_LINKS, NAVIGATION_LINKS_EN,
	NAVIGATION_LINKS_OUTSIDE_HOMEPAGE,
	NAVIGATION_LINKS_OUTSIDE_HOMEPAGE_EN,
} from '@/components/Header';
import Link from '@/components/Link';
import './Footer.scss';
import Logo from '@/components/Logo';

const Footer = () => {
	if (typeof window === 'undefined') {
		return <p>Server Render</p>;
	}

	const isEnglishLanguage = window && window.location.pathname.split('/')[1] && window.location.pathname.split('/')[1] === 'en';
	const isInHomepage = window.location.pathname === '/' || window.location.pathname === '/en';

	// eslint-disable-next-line no-nested-ternary
	const navLinks = () => {
		if (isInHomepage && isEnglishLanguage) {
			return NAVIGATION_LINKS_EN;
		} if (isInHomepage && !isEnglishLanguage) {
			return NAVIGATION_LINKS;
		} if (!isInHomepage && isEnglishLanguage) {
			return NAVIGATION_LINKS_OUTSIDE_HOMEPAGE_EN;
		}
		return NAVIGATION_LINKS_OUTSIDE_HOMEPAGE;
	};

	return (
		<div className="footer-background">
			<footer className="footer">
				<div className="footer__logo-copyright-container">
					<Logo className="footer__logo" />
					<p className="footer__copyright text-left">2017 © UAB Kauno Daisotra. Visos teisės saugomos.</p>
				</div>
				<ul className="footer__links">
					{navLinks().map((link) => (
						<Link key={link.title} title={link.title} href={link.to} />
					))}
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
