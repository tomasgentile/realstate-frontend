import { useStaticQuery, graphql } from 'gatsby';

const useHome = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiPagina(filter: {nombre: {eq: "Inicio"}}) {
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
  `);

  return data.allStrapiPagina.nodes.map(item => ({
    name: item.nombre,
    content: item.contenido,
    image: item.imagen.localFile
  }));
}

export default useHome;
