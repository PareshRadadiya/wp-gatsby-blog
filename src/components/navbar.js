/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import {StaticQuery, graphql, Link} from "gatsby"
import "./layout.css"

const Navbar = ({children}) => (
	<StaticQuery
    query={graphql`
    query LayoutQuery {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            name
            count
            items {
              order
              title
              url
            }
          }
        }
      }
  }
    `}
		render={data => ( 
			<>
      {console.log(data.allWordpressWpApiMenusMenusItems.edges[2].node)}
				<div className={`menu-primary-menu-container`}>
            <ul id={`menu-primary-menu`} className={`primary-menu`}>
                  <li>
                      <Link to="posts">Posts</Link>
                    </li>
                    {data.allWordpressWpApiMenusMenusItems.edges[2].node.items.map((item) =>
                        <li key={item.order}>
                            <Link to={item.url.replace(/\/$/,'').split('/').pop()}>
                                {item.title}
                            </Link>
                        </li>
                    )}
            </ul>
				</div>
			</>
		)}
	/>
)

export default Navbar
