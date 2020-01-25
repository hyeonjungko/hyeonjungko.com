import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Hyeonjung Ko</title>
    </Helmet>
      <Intro>
          I’m Hyeonjung Ko, a Boston–based Software Engineer.<br />
          A soon-to-be new-grad, 
          I am currently co-oping at Mercari and was previously at TripAdvisor.
      </Intro>
  </Layout>
  /*
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  */
)

export default IndexPage
