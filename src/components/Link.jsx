import React from 'react';
import './Link.scss';
import cx from 'classnames';

const Link = ({ href, title, className, isActive }) => (
	<a
		href={href}
		className={cx({
			link: true,
			[className]: className,
			'link--active': isActive,
		})}
	>
		{title}
	</a>
);

export default Link;
