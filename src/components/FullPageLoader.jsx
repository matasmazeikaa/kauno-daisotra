import React from 'react';
import cx from 'classnames';
import './FullPageLoader.scss';

const FullPageLoader = ({ isLoadingPage }) => (
	<div className={cx({ 'loader-background': true, 'loader-background--visible': isLoadingPage })}>
		<div className="loader">
			KAUNO DAISOTRA
		</div>
	</div>
);

export default FullPageLoader;
