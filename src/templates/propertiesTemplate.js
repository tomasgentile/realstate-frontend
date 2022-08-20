import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Icons from '../components/icons';

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;

const Sidebar = styled.aside`
  .price {
    font-size: 2rem;
    color: #75AB00;
  }
  .agent {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75AB00;
    padding: 3rem;
    color: #fff;

    p {
      margin: 0;
    }
  }
`;

export const query = graphql`
  query($id: String) {
    allStrapiProperty (filter: {id: {eq: $id}}) {
      nodes {
        Nombre
        Estacionamiento
        Habitaciones
        WC
        Precio
        Imagen {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        Descripcion
        agentes {
          Nombre
          Email
          Telefono
        }
      }
    }
  }
`;

const PropertiesTemplate = ({ data }) => {
  const { Nombre, Descripcion, WC, Estacionamiento, Habitaciones, agentes, Imagen, Precio } = data.allStrapiProperty.nodes[0];
  const image = getImage(Imagen.localFile);

  return (
    <Layout>
      <Seo title={Nombre} />
      <h1
        css={css`
          margin: 2rem auto 2rem;
        `}
      >{Nombre}</h1>
      <Content>
        <main>
          <GatsbyImage image={image} alt={`Imagen ${Nombre}`} />
          <p>{Descripcion}</p>
        </main>
        <Sidebar>
          <p className='price'>$ {Precio}</p>
          <Icons
            wc={WC}
            parking={Estacionamiento}
            rooms={Habitaciones}
          />
          <div className='agent'>
            <h2>Vendedor: </h2>
            <p>{agentes.Nombre}</p>
            <p>Email: {agentes.Email}</p>
            <p>Tel: {agentes.Telefono}</p>
          </div>
        </Sidebar>
      </Content>
    </Layout>
  )
}

export default PropertiesTemplate;
