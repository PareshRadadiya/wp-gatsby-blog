import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class PostsTemplate extends Component {
  render() {
    const posts = this.props.data.allWordpressPost

    return (
      <Layout>
        <h1>Posts</h1>
       {posts.edges.map(({node}) => (
            <div>
                <h3>{node.title}</h3>
            </div>
        ))}
      </Layout>
    )
  }
}

export default PostsTemplate

export const pageQuery = graphql`
  query postsQuery {
    allWordpressPost {
        edges {
          node {
            id
            slug
            title
            content
            excerpt
            date
          }
        }
      }
  }
`

