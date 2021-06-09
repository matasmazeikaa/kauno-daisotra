import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Section from '@/components/Section';
import './HomerServicesSections.scss';
import Button from '@/components/Button';

const HomeTransportationSection = ({ transportation }) => (
	<BackgroundImage
		Tag="section"
		fluid={transportation.background.image.childImageSharp.fluid}
	>
		<Section className="home-services">
			<h2 className="mb-24">{transportation.title}</h2>
			<p className="body mb-40 white">{transportation.description}</p>
			<Button title={transportation.button.title} to={transportation.button.to} />
		</Section>
	</BackgroundImage>
);

export default HomeTransportationSection;
