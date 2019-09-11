import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

const Checkout = ({ skuId }) => {
	const stripeRef = useRef(window.Stripe('pk_test_aYPPHqSnPACb4Lroa6fnQH6O00YKU03aac'));

	const redirectToCheckout = async (event) => {
		event.preventDefault();
		const { error } = await stripeRef.current.redirectToCheckout({
			items: [ { sku: skuId, quantity: 1 } ],
			successUrl: `http://localhost:8000/page-2/`,
			cancelUrl: `http://localhost:8000/`
		});
		if (error) {
			console.warn('Error:', error);
		}
	};

	return <button onClick={(event) => redirectToCheckout(event)}>BUY MY BOOK</button>;
};

export default Checkout;
