import { graphql } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import HomeHeroSection from '@/pages/home/HomeHeroSection';
import HomeAboutUsSection from '@/pages/home/HomeAboutUsSection';
import HomeServicesSection from '@/pages/home/HomeServicesSection';
import HomeTransportationSection from '@/pages/home/HomeTransportationSection';
import HomeWhyUs from '@/pages/home/HomeWhyUs';
import HomeContactUs from '@/pages/home/HomeContactUs';

const IndexPage = ({ data }) => {
	const {
		hero, aboutUs, pageMetadata, services, transportation, whyUs, contactUs,
	} = data.content.childMarkdownRemark.frontmatter;

	return (
		<Layout pageMetadata={pageMetadata}>
			<HomeHeroSection hero={hero} />
			<HomeAboutUsSection aboutUs={aboutUs} />
			<HomeServicesSection services={services} />
			<HomeTransportationSection transportation={transportation} />
			<HomeWhyUs whyUs={whyUs} />
			<HomeContactUs contactUs={contactUs} />
		</Layout>
	);
};

export default IndexPage;

export const PageQuery = graphql`
    query IndexPage {
        content: file(name: { eq: "home" }) {
            childMarkdownRemark {
                frontmatter {
                    pageMetadata {
                        title
                        description
                    }
                    hero {
                        title
                        description
                        background {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980, quality: 90) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                    }
                    aboutUs {
                        title
                        description
                        image {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                        info {
                            title
                            image {
                                image {
                                    publicURL
                                }
                                alt
                            }
                        }
                    }
                    services {
                        title
                        background {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                        services {
                            title
                            description
                            button {
                                title
                                to
                            }
                        }
                        subsection {
                            title
                            description
                            background {
                                image {
                                    publicURL
                                }
                                alt
                            }
                            button {
                                title
                                to
                            }
                        }
                    }
                    transportation {
                        title
                        description
                        button {
                            title
                            to
                        }
                        background {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                    }
                    whyUs {
                        title
                        description
                        image {
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1980) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            alt
                        }
                        info {
                            title
                            image {
                                image {
                                    publicURL
                                }
                                alt
                            }
                        }
                    }
                    contactUs {
                    		title
                    		description
                    		info {
                    				title
                    				description
                    				image {
                    						image {
                    								publicURL
                    						}
                    						alt
                    				}
                    		}
                    }
                }
            }
        }
    }
`;
