import GatsbyImage from 'gatsby-image';
import React from 'react';
import './HomeWhyUs.scss';

const HomeWhyUs = ({ whyUs }) => (
	<div className="about-us-background">
		<section className="home-why-us">
			<div className="home-why-us__image-container">
				<div className="home-why-us__box" />
				<GatsbyImage className="home-why-us__image" fluid={whyUs.image.image.childImageSharp.fluid} />
				<div className="home-why-us__box-empty" />
			</div>
			<div className="home-why-us__text-container">
				<h2 className="mb-24 text-uppercase text-left">{whyUs.title}</h2>
				<p className="body mb-40 text-left">{whyUs.description}</p>
				<ul>
					{whyUs.info.map((point) => (
						<li>
							<div className="flex flex-align-center mb-24">
								<img className="mr-24" src={point.image.image.publicURL} alt={point.image.alt} />
								<h3 className="text-uppercase">{point.title}</h3>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	</div>
);

export default HomeWhyUs;
