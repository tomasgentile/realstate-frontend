import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const IconsList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;

    img {
      margin-right: 1rem;
    }
  }
`;

const Icons = ({ wc, parking, rooms }) => {
  const { icons } = useStaticQuery(graphql`
    query {
      icons: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);

  const imgIcons = icons.edges;

  return (
    <IconsList>     
      <li>
        <img src={imgIcons[3].node.publicURL} alt='img rooms' />
        <p>{rooms}</p>
      </li>
      <li>
        <img src={imgIcons[5].node.publicURL} alt='img wc' />
        <p>{wc}</p>
      </li>
      <li>
        <img src={imgIcons[4].node.publicURL} alt='img parking' />
        <p>{parking}</p>
      </li>
    </IconsList>
  )
}

export default Icons;
