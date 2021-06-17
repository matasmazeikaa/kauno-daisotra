import React from 'react';
import GatsbyImage from 'gatsby-image';
import './CommonServiceSection.scss';
import EuropeSvg from '../../static/img/europe.svg';

const CommonServiceSectionSmall = ({ data }) => (
	<div className="common-service-section common-service-section--no-padding-top" key={2}>
		<div className="common-service-section__text-container">
			<ul>
				{data.points.slice(3, 5).map((point, index) => (
					<li
						className="common-service-section__point-container"
						data-sal={(index + 1) % 2 === 0 ? 'flip-right' : 'flip-left'}
						data-sal-delay={((index + 1) * 100)}
						data-sal-duration="1000"
					>
						<h2 className="common-service-section__point-title">
							0
							{index + 4}
						</h2>
						<p className="body text-left">{point.description}</p>
					</li>
				))}
			</ul>
		</div>
	</div>
);

export default CommonServiceSectionSmall;
