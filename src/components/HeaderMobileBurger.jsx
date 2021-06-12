import React from 'react';
import cx from 'classnames';
import './HeaderMobileBurger.scss';
import Link from '@/components/Link';
import { NAVIGATION_LINKS } from '@/components/Header';
import GatsbyImage from 'gatsby-image';

const HeaderMobileBurger = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

	return (
		<>
			<a
				href="#"
				onClick={() => { setMobileMenuOpen((prev) => !prev); }}
				className={cx({
					menuButton: true,
					'menuButton--active': isMobileMenuOpen,
				})}
			>
				<span className="lines" />
			</a>
			<nav className={cx({
				mainMenu: true,
				'mainMenu--active': isMobileMenuOpen,
				'text-center': true,
			})}
			>
				<h2 className="mainMenu__title">Naviguok greičiau</h2>
				<ul>
					{NAVIGATION_LINKS.map((link) => (
						<li className="mainMenu__link">
							<Link title={link.title} href={link.to} />
						</li>
					))}
				</ul>
				<p className="body-small menuButton__copyright">
					2017 © UAB Kauno Daisotra.
					Visos teisės saugomos.
				</p>
			</nav>
		</>
	);
};

export default HeaderMobileBurger;
