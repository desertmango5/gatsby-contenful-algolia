import React from 'react'
import Link from 'gatsby-link'
import Markdown from 'react-markdown'
import '../styles/styles.scss'

const IndexPage = ({ data }) => (
  <div>
    {data.allContentfulBlogPost.edges.map(post => (
      <div key={post.node.id}>
        <p>{post.node.date}</p>
        <h2>{post.node.title}</h2>
        <Markdown 
          source={post.node.content.content}
        />
      </div>
    ))}
  </div>
)

export default IndexPage

export const constentfulTest = graphql`
  query TestQuery {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          date(formatString: "MMM DD, YYYY")
          content {
            id
            content
          }
        }
      }
    }
  }
`
