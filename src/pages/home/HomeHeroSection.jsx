import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Section from '@/components/Section';
import './HomeHeroSection.scss';
import Button from '@/components/Button';

const HomeHeroSection = ({ hero }) => (
	<BackgroundImage
		Tag="section"
		fluid={hero.background.image.childImageSharp.fluid}
	>
		<Section className="home-hero-section">
			<h1 className="mb-24">{hero.title}</h1>
			<p className="body mb-40">{hero.description}</p>
			<Button title="Bendradarbiaukime" />
		</Section>
	</BackgroundImage>
);

export default HomeHeroSection;
