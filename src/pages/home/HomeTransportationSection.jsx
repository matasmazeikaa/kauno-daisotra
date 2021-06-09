import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Section from '@/components/Section';
import './HomeTransportationSection.scss';
import Button from '@/components/Button';
import BackgroundOverlay from '@/components/BackgroundOverlay';

const HomeTransportationSection = ({ transportation }) => (
	<BackgroundImage
		Tag="section"
		fluid={transportation.background.image.childImageSharp.fluid}
		className="home-transportation-background"
	>
		<BackgroundOverlay />
		<Section className="home-transportation flex-all-center-column">
			<h2 className="mb-24">{transportation.title}</h2>
			<p className="body mb-40 white">{transportation.description}</p>
			<Button title={transportation.button.title} to={transportation.button.to} />
		</Section>
	</BackgroundImage>
);

export default HomeTransportationSection;
