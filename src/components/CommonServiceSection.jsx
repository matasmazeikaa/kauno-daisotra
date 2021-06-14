import React from 'react';
import GatsbyImage from 'gatsby-image';
import './CommonServiceSection.scss';
import EuropeSvg from '../../static/img/europe.svg';

const CommonServiceSection = ({ data }) => (
	<div className="about-us-background" key={2}>
		<img className="about-us-background__europe-background" src={EuropeSvg} alt="Europe" />
		<section className="common-service-section">
			<div className="common-service-section__text-container">
				<ul>
					{data.points.map((point, index) => (
						<li
							className="common-service-section__point-container"
							data-sal={(index + 1) % 2 === 0 ? 'flip-right' : 'flip-left'}
							data-sal-delay={((index + 1) * 100)}
						>
							<h2 className="common-service-section__point-title">
								0
								{index + 1}
							</h2>
							<p className="body text-left">{point.description}</p>
						</li>
					))}
				</ul>
			</div>
			<div
				className="common-service-section__image-container"
				data-sal="slide-left"
				data-sal-delay="150"
			>
				<div className="common-service-section__box" />
				<GatsbyImage className="common-service-section__image" fluid={data.image.image.childImageSharp.fluid} />
				<div className="common-service-section__box-empty" />
			</div>
		</section>
	</div>
);

export default CommonServiceSection;
