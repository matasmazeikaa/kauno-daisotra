import React from 'react';
import cx from 'classnames';
import './Button.scss';

const Button = ({
	title, type = 'primary', className, isAlwaysDesktopPadding,
}) => (
	<button
		type="button"
		className={cx({
			button: true,
			[`button--${type}`]: type,
			'button--always-desktop-padding': isAlwaysDesktopPadding,
			[className]: className,
		})}
	>
		{title}
	</button>
);

export default Button;
