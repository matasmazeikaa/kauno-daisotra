import React from 'react';
import './Section.scss';
import cx from 'classnames';

const Section = ({ className, children }) => (
	<section className={cx({
		'section-class': true,
		[className]: className,
	})}
	>
		{children}
	</section>
);

export default Section;
