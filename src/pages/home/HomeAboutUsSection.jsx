import React from 'react';
import Section from '@/components/Section';
import './HomeAboutUsSection.scss';
import GatsbyImage from 'gatsby-image';
import EuropeSvg from '../../../static/img/europe.svg';

const HomeAboutUsSection = ({ aboutUs }) => (
	<div className="about-us-background">
		<img className="about-us-background__europe-background" src={EuropeSvg} alt="Europe" />
		<Section className="about-us">
			<div className="about-us__text-container">
				<h2 className="about-us__title text-uppercase">{aboutUs.title}</h2>
				<p className="body about-us__info">{aboutUs.description}</p>
				<ul>
					{aboutUs.info.map((point) => (
						<li>
							<div className="flex flex-align-center mb-24">
								<img className="mr-24" src={point.image.image.publicURL} alt={point.image.alt} />
								<h3 className="text-uppercase">{point.title}</h3>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className="about-us__image-container">
				<div className="about-us__box" />
				<GatsbyImage className="about-us__image" fluid={aboutUs.image.image.childImageSharp.fluid} />
				<div className="about-us__box-empty" />
			</div>
		</Section>
	</div>
);

export default HomeAboutUsSection;
