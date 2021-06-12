import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Section from '@/components/Section';
import './HomerServicesSections.scss';
import Button from '@/components/Button';
import BackgroundOverlay from '@/components/BackgroundOverlay';

const HomeServicesSection = ({ services }) => (
	<BackgroundImage
		Tag="section"
		fluid={services.background.image.childImageSharp.fluid}
		className="home-services-background"
	>
		<BackgroundOverlay opacity={0.8} />
		<Section className="home-services">
			<h2 className="home-services__service-title">{services.title}</h2>
			<div className="home-services__services">
				{services.services.map(({ title, button, image }) => (
					<div className="home-services__service">
						<img className="home-services__service-icon" src={image.image.publicURL} alt={image.alt} />
						<h3 className="home-services__service-title">{title}</h3>
						<Button title={button.title} to={button.to} type="secondary" />
					</div>
				))}
			</div>
			<div className="home-services__subsection flex-all-center-column">
				<h2 className="text-uppercase mb-8">{services.subsection.title}</h2>
				<p className="body mb-24">{services.subsection.description}</p>
				<Button
					isAlwaysDesktopPadding
					title={services.subsection.button.title}
					to={services.subsection.button.to}
				/>
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
