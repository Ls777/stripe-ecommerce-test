import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';

const Products = () => {
	const data = useStaticQuery(graphql`
		query SkusForProduct {
			skus: allStripeSku {
				edges {
					node {
						id
						currency
						price
						attributes {
							name
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	const skus = data.skus;

	return (
		<div>
			<h2>Products</h2>
			{skus.edges.map(({ node: sku }) => (
				<div>
					<Link to={sku.fields.slug}>{sku.attributes.name}</Link>
				</div>
			))}
		</div>
	);
};

export default Products;
