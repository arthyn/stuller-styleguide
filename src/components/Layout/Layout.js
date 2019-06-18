import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { MDXProvider } from '@mdx-js/react';
import { StaticQuery, graphql, Link } from 'gatsby';

import { Header } from '../Header';
import { Container } from '../Container';
import { ResetStyle } from '../Reset';
import { CodeBlock } from '../CodeBlock';
import { NAV_ITEMS } from '../../constants';

const components = {
  code: CodeBlock,
};

const Layout = ({ children }) => {
  const navigationItems = NAV_ITEMS.map(({ to, href, label }) => {
    if (href) {
      return (
        <a key={label} href={href}>
          {label}
        </a>
      );
    }

    return (
      <Link key={label} to={to}>
        {label}
      </Link>
    );
  });

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <MDXProvider components={components}>
          <>
            <ResetStyle />

            <Helmet
              title={data.site.siteMetadata.title}
              meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
            >
              <html lang="en" />
            </Helmet>
            <Header title={data.site.siteMetadata.title} navigation={navigationItems} />
            <Container>{children}</Container>
          </>
        </MDXProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };
