import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Contact from "../components/contact"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Hyeonjung Ko</title>
    </Helmet>
    <Intro>
      I’m Hyeonjung Ko, a Boston–based <br />Software Engineer.<br />
      <br />
      A soon-to-be new-grad,<br />
      I am currently co-oping at <a id="intro-mercari" href="https://www.mercari.com/">Mercari</a> <br />and was previously at <a id="intro-tripadvisor" href="https://www.tripadvisor.com/">TripAdvisor</a>.
    </Intro>
    <Contact>
      <a href="https://www.linkedin.com/in/hyeonjung-ko/">Linkedin</a>, <a href="mailto:hjko1203@gmail.com">Mail</a>
    </Contact>
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
