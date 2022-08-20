import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "../css/normalize.css";
import "../css/layout.css";
import { Global, css } from "@emotion/react";
import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 2;
            font-family: 'Lato', sans-serif;
          }
          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1, h2 {
            text-align: center;
            font-family: 'Lato', sans-serif;
            font-weight: 300;
          }
          h3 {
            font-family: 'Roboto', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            width: 95%;
          }
          img {
            max-width: 100%;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
