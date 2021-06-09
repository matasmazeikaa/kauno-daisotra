import React from 'react';
import './BackgroundOvelray.scss';

const BackgroundOverlay = ({ opacity = 0.2 }) => (
	<div className="background-overlay" style={{ '--opacity': opacity }} />
);

export default BackgroundOverlay;
