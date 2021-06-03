import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Section from '@/components/Section';
import './HomerServicesSections.scss';
import GatsbyImage from 'gatsby-image';
import Button from '@/components/Button';

const HomeServicesSection = ({ services }) => (
	<BackgroundImage
		Tag="section"
		fluid={services.background.image.childImageSharp.fluid}
	>
		<Section className="home-services">
			<h2 className="mb-40">{services.title}</h2>
			<div className="home-services__services mb-80">
				{services.services.map(({ title, description, button }) => (
					<div className="home-services__service">
						<GatsbyImage className="mb-24" />
						<h3 className="mb-8">{title}</h3>
						<p className="body-small mb-48 text-center">{description}</p>
						<Button title={button.title} to={button.to} type="secondary" />
					</div>
				))}
			</div>
			<div className="home-services__subsection flex-all-center-column">
				<h2 className="text-uppercase mb-8">{services.subsection.title}</h2>
				<p className="body mb-24">{services.subsection.description}</p>
				<Button title={services.subsection.button.title} to={services.subsection.button.to} />
				<img
					src={services.subsection.background.image.publicURL}
					alt={services.subsection.background.alt}
					className="home-services__subsection-background"
				/>
			</div>
		</Section>
	</BackgroundImage>
);

export default HomeServicesSection;
