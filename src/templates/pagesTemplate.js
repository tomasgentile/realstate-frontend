import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PropertiesList from '../components/propertiesList';

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
  }
`;

export const query = graphql`
    query ($id: String) {
        allStrapiPagina(filter: {id: {eq: $id}}) {
            nodes {
                id
                nombre
                contenido
                imagen {
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    } 
`;

const PagesTemplate = ({ data }) => {
    const { nombre, contenido, imagen } = data.allStrapiPagina.nodes[0];
    const image = getImage(imagen.localFile);

    return (
        <Layout>
            <Seo title={nombre} />
            <main className='container'>
                <h1
                    css={css`
                        margin: 2rem auto 2rem;
                    `}
                >{nombre}</h1>
                <Content>
                    <GatsbyImage image={image} alt={`Imagen ${nombre}`} />
                    <p>{contenido}</p>
                </Content>
            </main>
            {nombre === 'Propiedades' && (
                <PropertiesList />
            )}
        </Layout>
    )
}

export default PagesTemplate;