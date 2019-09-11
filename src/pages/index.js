import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Products from '../components/products';
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Products />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
