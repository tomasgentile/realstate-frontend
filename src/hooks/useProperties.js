import { graphql, useStaticQuery } from "gatsby";

const useProperties = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiProperty {
                nodes {
                    id
                    WC
                    Nombre
                    Habitaciones
                    Estacionamiento
                    categorias {
                        Nombre
                    }
                    Descripcion
                    Precio
                    agentes {
                        Nombre
                        Telefono
                        Email
                    }
                    Imagen {
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
    
    return data.allStrapiProperty.nodes.map(property => ({
        name: property.Nombre,
        description: property.Descripcion,
        image: property.Imagen.localFile, 
        id: property.id,
        wc: property.WC,
        parking: property.Estacionamiento,
        rooms: property.Habitaciones,
        agents: property.agentes,
        price: property.Precio,
        categories: property.categorias.Nombre
    }));
}

export default useProperties;