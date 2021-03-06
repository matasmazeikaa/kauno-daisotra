import React from 'react';
import Section from '@/components/Section';
import './HomeAboutUsSection.scss';
import GatsbyImage from 'gatsby-image';
import EuropeSvg from '../../static/img/europe.svg';

const HomeAboutUsSection = ({ aboutUs = {} }) => aboutUs.title && (
	<div className="about-us-background" key={2}>
		<img className="about-us-background__europe-background" src={EuropeSvg} alt="Europe" />
		<Section className="about-us">
			<div className="about-us__text-container">
				<h2
					className="about-us__title text-uppercase"
					data-sal="slide-right"
					data-sal-duration="1000"
				>
					{aboutUs.title}
				</h2>
				<h3
					className="about-us__subtitle text-uppercase"
					data-sal="slide-right"
					data-sal-duration="1000"
				>
					{aboutUs.subtitle}
				</h3>
				<p
					className="body about-us__info"
					data-sal="slide-right"
					data-sal-duration="1000"
				>
					{aboutUs.description}
				</p>
			</div>
			<div
				className="about-us__image-container"
				data-sal="slide-left"
				data-sal-duration="1000"
			>
				<div className="about-us__box" />
				<GatsbyImage
					className="about-us__image"
					fluid={aboutUs.image.image.childImageSharp.fluid}
				/>
				<div className="about-us__box-empty" />
			</div>
		</Section>
	</div>
);

export default HomeAboutUsSection;
