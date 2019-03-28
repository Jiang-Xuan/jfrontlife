import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>嗨, 这里是蒋璇的前端笔记, 记录前端生活的点点滴滴</h2>
    <ul>
      <li><Link to="/why-use-the-new-blog">为什么使用了该新博客?</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
