import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />

        {
          currentPage.featured_media &&
          <div className={`post-thumbnail`}>
            <Img fluid={currentPage.featured_media.localFile.childImageSharp.fluid} />
          </div>
        }
        
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

