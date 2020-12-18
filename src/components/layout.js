/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
//import { Container } from "react-bootstrap";

import Header from "./header";
import FooterLander from './Footer/footerLander'
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../css/normalize.css'
import '../css/webflow.css'
import '../css/lander.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
       {children}
      <FooterLander />

    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
