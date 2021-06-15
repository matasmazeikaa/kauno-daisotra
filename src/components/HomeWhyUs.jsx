import GatsbyImage from 'gatsby-image';
import React from 'react';
import './HomeWhyUs.scss';
import Collapsible from '@/components/Collapsible';

const HomeWhyUs = ({ whyUs }) => (
	<div className="about-us-background">
		<section className="home-why-us">
			<img
				src={whyUs.background.image.publicURL}
				alt={whyUs.background.alt}
				className="home-why-us__section-background"
			/>
			<div
				className="home-why-us__image-container"
				data-sal="slide-right"
				data-sal-delay="200"
				data-sal-duration="1000"
			>
				<div className="home-why-us__box" />
				<GatsbyImage className="home-why-us__image" fluid={whyUs.image.image.childImageSharp.fluid} />
				<div className="home-why-us__box-empty" />
			</div>
			<div className="home-why-us__text-container">
				<h2
					className="mb-24 text-uppercase text-left"
					data-sal="slide-right"
					data-sal-delay="100"
					data-sal-duration="1000"
				>
					{whyUs.title}
				</h2>
				<p
					data-sal="slide-right"
					data-sal-delay="200"
					data-sal-duration="1000"
					className="body mb-40 text-left home-why-us__info"
				>
					{whyUs.description}
				</p>
				<Collapsible items={whyUs.info} />
			</div>
		</section>
	</div>
);

export default HomeWhyUs;
