import React from 'react'
import { graphql } from 'gatsby'

import 'prismjs/themes/prism-okaidia.css'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div style={{ padding: '2vw 5vw' }} className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title} <small style={{ color: 'gray' }}>{frontmatter.tags.join(',')}</small></h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
