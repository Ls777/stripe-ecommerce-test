/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'StripeSku') {
		console.log(node);
		const slug = `/products/${node.id}/`;
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;


	const skuData = await graphql(`
    query {
      allStripeSku {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

	skuData.data.allStripeSku.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve('./src/templates/product.js'),
			context: {
				slug: node.fields.slug
			}
		});
	});

};
