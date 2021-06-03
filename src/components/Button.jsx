import React from 'react';
import cx from 'classnames';
import './Button.scss';

const Button = ({ title, type = 'primary' }) => (
	<button
		type="button"
		className={cx({
			button: true,
			[`button--${type}`]: type,
		})}
	>
		{title}
	</button>
);

export default Button;
