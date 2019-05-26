import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Img from "gatsby-image"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        {
          post.featured_media &&
          <div className={`post-thumbnail`}>
            <Img fluid={post.featured_media.localFile.childImageSharp.fluid} />
          </div>
        }
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
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
      siteMetadata {
        title
        subtitle
      }
    }
  }
`