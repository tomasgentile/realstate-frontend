const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const query = await graphql(`
    query {
      allStrapiPagina {
        nodes {
          nombre
          id
        }
      }
      allStrapiProperty {
        nodes {
          id
          Nombre
        }
      }
    }
  `);
  // No results
  if (query.errors) {
    reporter.panic('No hubo resultados', query.errors);
  }

  const properties = query.data.allStrapiProperty.nodes;
  const pages = query.data.allStrapiPagina.nodes;

  // Pages Templates
  pages.forEach(page => {
    actions.createPage({
      path: urlSlug(page.nombre),
      component: require.resolve('./src/templates/pagesTemplate.js'),
      context: { id: page.id }
    });
  });
  
  // Properties Templates
  properties.forEach(property => {
    actions.createPage({
      path: urlSlug(property.Nombre),
      component: require.resolve('./src/templates/propertiesTemplate.js'),
      context: { id: property.id }
    });
  });
}
