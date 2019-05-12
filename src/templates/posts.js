import React, {Component} from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"

class PostsTemplate extends Component {
	render() {
		const posts = this.props.data.allWordpressPost

		return (
			<Layout>
				<h1>Posts</h1>
				{posts.edges.map(({node}) => (
					<article key={node.id} className={`post-${node.slug} post type-post status-publish`}>
						<header className={`entry-header`}>
							<h3 className={`entry-title`}>
								<Link to={`post/${node.slug}`}>
									{node.title}
								</Link>
							</h3>
						</header>

						<div className="entry-content" dangerouslySetInnerHTML={{__html: node.excerpt}}  />
					</article>
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

