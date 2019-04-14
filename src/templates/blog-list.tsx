import { graphql, Link } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import Img from 'gatsby-image'
import * as React from 'react'
import Layout, { Content, BoxedContent } from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Pagination from '../components/pagination'
import styled from 'styled-components'
import { FaClock, FaAlignLeft } from 'react-icons/fa'

interface PostNode {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
    }
    fields: {
      slug: string
      readingTime: {
        text: string
      }
    }
  }
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      edges: PostNode[]
    }
    bannerImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
  pageContext: {
    limit: number
    skip: number
    numPages: number
    currentPage: number
  }
}

const Header = styled.header`
  border-bottom: 5px solid ${props => props.theme.colorRed};
  margin-bottom: ${({ theme }) => theme.magic * 2}rem;

  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;

  .gatsby-image-wrapper {
    height: 100vh;
    min-width: 100vw;
    width: 100vw;
  }

  span {
    z-index: 2;
    position: absolute;
    width: 100vw;
    text-align: center;
    font-size: 6vw;
    font-weight: 900;
    color: ${props => props.theme.colorWhite};
    background-color: ${props => props.theme.colorRed}d9;
    text-shadow: 0px 0px 0.8vw rgba(104, 0, 0, 0.95);
    border-top: 1px solid rgba(154, 0, 0, 0.95);
    border-bottom: 1px solid rgba(154, 0, 0, 0.95);
    transform: translateY(-100%);
    top: 50vh;
  }
`

const ReadMoreLink = styled(Link)`
  background-color: ${({ theme }) => theme.colorRed};
  box-shadow: 0 2px 0 ${({ theme }) => theme.colorRedDarker};
  color: ${({ theme }) => theme.colorWhite};
  padding: ${({ theme }) => theme.magic / 5.0}rem ${({ theme }) => (theme.magic * 2.0) / 3.0}rem;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  font-family: "Lato";

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
    top: 3px;
  }
}
`

const Post = styled(BoxedContent)`
  margin-bottom: ${({ theme }) => theme.magic * 2}rem;

  section {
    h6 {
      color: ${({ theme }) => theme.colorGrey};
      font-weight: 400;
      margin-bottom: 0px;

      span {
        vertical-align: middle;
        margin-right: 0.5rem;
      }

      svg {
        height: 0.7rem;
        width: 0.7rem;
        vertical-align: middle;
        margin-right: 0.2rem;
      }
    }

    h2 {
      margin-top: 0px;
      max-width: 36rem;
    }
  }
`

const TopAnchor = styled.a`
  position: absolute;
  top: 100vh;
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { currentPage, numPages } = this.props.pageContext
    const { data } = this.props

    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="(ノಠ益ಠ)ノ彡┻━┻" keywords={['blog']} />
        <Header>
          <span>
            <i>{data.site.siteMetadata.title}</i>
          </span>
          <Img fluid={data.bannerImage.childImageSharp.fluid} />
        </Header>
        <TopAnchor id="listing" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Post key={node.fields.slug}>
              <section>
                <h6>
                  <FaClock />
                  <span>{node.frontmatter.date}</span>
                  <FaAlignLeft />
                  <span>{node.fields.readingTime.text}</span>
                </h6>
                <h2>
                  <Link to={`/${node.fields.slug}`}>{title}</Link>
                </h2>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <p>
                  <ReadMoreLink to={`/${node.fields.slug}`}>Read More</ReadMoreLink>
                </p>
              </section>
            </Post>
          )
        })}
        <Content>
          <Pagination numPages={numPages} ellipsis={5} currentPage={currentPage} />
        </Content>
        <Footer />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 260)
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "DD MMM 'YY")
            title
          }
        }
      }
    }
    bannerImage: file(relativePath: { eq: "wastelands.jpg" }) {
      childImageSharp {
        fluid(cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
