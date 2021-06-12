import React from 'react';
import cx from 'classnames';
import LogoSvg from '../../static/img/logo.svg';
import './Link.scss';
import './Logo.scss';
import { Link } from 'gatsby';

const Logo = ({ className }) => (
	<Link to="/">
		<img
			src={LogoSvg}
			alt="Kauno daistora"
			className={cx({
				[className]: className,
				logo: true,
			})}
		/>
	</Link>
);

export default Logo;
