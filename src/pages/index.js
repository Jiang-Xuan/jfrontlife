import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2>嗨, 这里是蒋璇的前端笔记, 记录前端生活的点点滴滴</h2>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "DD MM, YYYY")
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
