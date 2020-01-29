/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import "../css/styles.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
        <main className="d-flex flex-column align-items-center py-5">{children}</main>
        <footer className="d-flex flex-column text-center py-4">
          © {new Date().getFullYear()} Secular Organizations for Sobriety — New York State
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
