import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image'
import { FluidObject } from 'gatsby-image'
import { Content, BoxedContent } from '../components/layout'
import Footer from '../components/footer'
import { FaClock, FaAlignLeft } from 'react-icons/fa'

import styled from 'styled-components'

const Header = styled.header`
  width: 100vw;

  .gatsby-image-wrapper {
    img {
      border-bottom: 5px solid ${({ theme }) => theme.colorRed};
    }
  }
`

const Title = styled(Content)`
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

  h1 {
    max-width: 44rem;
    margin-top: 0px;
    margin-bottom: ${({ theme }) => theme.magic}rem;
  }
`

const Post = styled(BoxedContent)`
  section {
    .emoji-icon {
      border: none;
    }

    .gatsby-resp-iframe-wrapper {
      margin-left: ${({ theme }) => theme.magic * 3}rem;
      margin-right: ${({ theme }) => theme.magic * 3}rem;
      padding-bottom: 46% !important;
      margin-bottom: ${({ theme }) => theme.magic}rem;

      @media (max-width: 1024px) {
        margin-left: 0;
        margin-right: 0;
      }
    }

    .gatsby-resp-image-link {
      margin-left: ${({ theme }) => theme.magic * 3}rem;
      margin-right: ${({ theme }) => theme.magic * 3}rem;
      @media (max-width: 1024px) {
        margin-left: 0;
        margin-right: 0;
      }

      .gatsby-resp-image-wrapper {
        img,
        span {
          border-radius: ${({ theme }) => theme.round};
        }

        border-radius: ${({ theme }) => theme.round};
        box-shadow: 0px 2px ${({ theme }) => theme.round} ${({ theme }) => theme.colorGrey};

        @media (max-width: 1024px) {
          margin-left: 0.1rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
`

const Navigation = styled.ul`
  display: flex;
  flex-rap: wrap;
  justify-content: space-between;
  list-style: none;
  font-size: 22px;
  margin-top: ${({ theme }) => theme.magic * 2}rem;
  margin-bottom: ${({ theme }) => (theme.magic * 7) / 5}rem;
  margin-left: -${({ theme }) => theme.magic * 2}rem;
  margin-right: -${({ theme }) => theme.magic * 2}rem;

  @media (max-width: 1024px) {
    visibility: hidden;
  }
`

const NavigationTitle = styled.span`
  font-style: italic;
`

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: {
      fields: {
        slug: string
        readingTime: {
          text: string
        }
      }
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
    headerImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    indexImage: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
  pageContext: {
    previous: any
    next: any
  }
}

export default class BlogPostTemplate extends React.Component<BlogPostTemplateProps, {}> {
  public render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext
    const { headerImage, indexImage } = this.props.data

    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Header>
          <Img fluid={headerImage.childImageSharp.fluid} />
        </Header>
        <Title>
          <section>
            <h6>
              <FaClock />
              <span>{post.frontmatter.date}</span>
              <FaAlignLeft />
              <span>{post.fields.readingTime.text}</span>
            </h6>
            <h1>{post.frontmatter.title}</h1>
          </section>
        </Title>
        <Post>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </Post>
        <Content>
          <nav>
            <Navigation>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    ←<NavigationTitle>{next.frontmatter.title}</NavigationTitle>
                  </Link>
                )}
              </li>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    <NavigationTitle>{previous.frontmatter.title} </NavigationTitle>→
                  </Link>
                )}
              </li>
            </Navigation>
          </nav>
        </Content>
        <Footer />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "DD MMM 'YY")
      }
    }
    headerImage: file(relativePath: { eq: "wastelands-header.jpg" }) {
      childImageSharp {
        fluid(cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    indexImage: file(relativePath: { eq: "barbelith.png" }) {
      childImageSharp {
        fluid(cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
