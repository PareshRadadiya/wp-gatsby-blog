import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

class IndexPage extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout>

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
 

export default IndexPage

export const homePageQuery = graphql`
  query {
    wordpressPage(title: {eq: "Home"}) {
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
  }
`

