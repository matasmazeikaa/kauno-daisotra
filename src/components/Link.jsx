import React from 'react';
import './Link.scss';
import cx from 'classnames';

const Link = ({ href, title, className }) => (
	<a
		href={href}
		className={cx({
			link: true,
			[className]: className,
		})}
	>
		{title}
	</a>
);

export default Link;
