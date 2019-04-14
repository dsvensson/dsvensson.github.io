import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'
import { FaTwitter, FaGithub, FaCreativeCommons } from 'react-icons/fa'
import styled from 'styled-components'

const detailsQuery = graphql`
  query Footer {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const CenteredFooter = styled.div`
  background-color: ${({ theme }) => theme.colorRedDarker};
  box-shadow: inset 0 2rem 2rem -2rem ${props => props.theme.colorRedDarkest}d9;
  text-align: center;
  padding-top: ${({ theme }) => theme.magic}rem;
  padding-bottom: ${({ theme }) => theme.magic}rem;

  .react-icon {
    color: ${({ theme }) => theme.colorWhiteDark};
    box-shadow: 0 0 0 0.15rem ${({ theme }) => theme.colorWhite};
    background-color: ${({ theme }) => theme.colorRed};
    border-color: ${({ theme }) => theme.colorRed};
    border-width: 10px;
    border-style: solid;
    border-radius: 30rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
    margin-top: ${({ theme }) => theme.magic}rem;
    margin-bottom: ${({ theme }) => theme.magic}rem;
  }
`

const Footer: React.SFC = () => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      return (
        <CenteredFooter>
          <a href="https://twitter.com/dsvensson" target="_blank">
            <FaTwitter />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
            <FaCreativeCommons />
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/dsvensson" target="_blank">
            <FaGithub />
          </a>
        </CenteredFooter>
      )
    }}
  />
)

Footer.defaultProps = {
  keywords: [],
  lang: 'en',
  meta: [],
}

export default Footer
