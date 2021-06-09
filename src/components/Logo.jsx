import React from 'react';
import cx from 'classnames';
import LogoSvg from '../../static/img/logo.svg';
import './Link.scss';

const Logo = ({ className }) => (
	<img
		src={LogoSvg}
		alt="Kauno daistora"
		className={cx({
			[className]: className,
		})}
	/>
);

export default Logo;
