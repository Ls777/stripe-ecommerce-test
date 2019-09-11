import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Checkout from '../components/checkout';
import Img from 'gatsby-image';

export default ({ data }) => {
	const sku = data.stripeSku;
	return (
		<Layout>
			<div>
				<h1>{sku.product.name}</h1>
				<div>${sku.price}</div>
				<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
					{sku.localFiles &&
						sku.localFiles.map((localFile) => <Img fluid={localFile.childImageSharp.fluid} />)}
				</div>
				<Checkout skuId={sku.id} />
			</div>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		stripeSku(fields: { slug: { eq: $slug } }) {
			price
			product {
				name
			}
			id
			localFiles {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;
