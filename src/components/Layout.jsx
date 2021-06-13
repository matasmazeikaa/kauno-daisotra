import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, withPrefix } from 'gatsby';
import '@/components/Layout.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

const Layout = ({ children, pageMetadata }) => {
	const { title, description } = pageMetadata;

	return (
		<div>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href={`${withPrefix('/')}img/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix('/')}img/favicon-32x32.png`}
					sizes="32x32"
				/>
				<link
					rel="icon"
					type="image/png"
					href={`${withPrefix('/')}img/favicon-16x16.png`}
					sizes="16x16"
				/>

				<link
					rel="mask-icon"
					href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
					color="#ff4400"
				/>
				<meta name="theme-color" content="#fff" />

				<meta property="og:type" content="business.business" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content="/" />
				<meta
					property="og:image"
					content={`${withPrefix('/')}img/og-image.jpg`}
				/>
			</Helmet>

			<ReactFullpage
				debug /* Debug logging */
				navigation
				anchors={['pradzia', 'apie-mus', 'paslaugos', 'transportavimas', 'kodel-mes', 'kontaktai']}
				navigationTooltips={['Pradžia', 'Apie mus', 'Paslaugos', 'Transportavimas', 'Kodėl mes?', 'Kontaktai']}
				showActiveTooltip
				fixedElements="#header"
				navigationPosition="left"
				responsiveWidth={1024}
				render={() => (
					<>
						<Header />
						<ReactFullpage.Wrapper>
							{children}
							<div className="section fp-auto-height">
								<Footer />
							</div>
						</ReactFullpage.Wrapper>
					</>
				)}
			/>
		</div>
	);
};

export const query = graphql`
    fragment pageMetadata on SitePage {
        pageMetadata {
            title
            siteDescription
        }
    }
`;

export default Layout;
