import * as React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { IconContext } from 'react-icons'

import 'firacode/distr/fira_code.css'
import 'typeface-lato/index.css'
import 'typeface-lora/index.css'

interface ThemeProps {
  magic: number
  round: string
  colorWhite: string
  colorWhiteDark: string
  colorGrey: string
  colorGreyLight: string
  colorBlackLight: string
  colorBlackDark: string
  colorRed: string
  colorRedDarker: string
  colorRedDarkest: string
}

const theme: ThemeProps = {
  magic: 1.7,
  round: '5.1px',
  colorWhite: '#fcfafa',
  colorWhiteDark: '#f9f7f7',
  colorGrey: '#aaaaaa',
  colorGreyLight: '#e8e6e6',
  colorBlackLight: '#333333',
  colorBlackDark: '#111111',
  colorRed: '#cc0000',
  colorRedDarker: '#990000',
  colorRedDarkest: '#350000',
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
body {
  background-color: ${theme.colorWhiteDark};
  overflow-x: hidden;
}

a {
  color: ${theme.colorRed};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
}

/* base16-prism (https://github.com/atelierbram/base16-prism)
 * by Bram de Haan (http://atelierbramdehaan.nl)
 * Nord scheme by arcticicestudio
*/

code[class*="language-"],
pre[class*="language-"] {
  font-family: "Fira Code";
  line-height: 1.55;

  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  text-shadow: none;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
  text-shadow: none;
}

/* Code blocks */
pre[class*="language-"] {
  overflow: auto;
  color: #E5E9F0;
  background: #2E3440;
  padding: 0.85rem;
  overflow: auto;
  
  border-radius: ${theme.round};
  left: 50%;
  right: 50%;
  margin-left: -${theme.magic}rem;
  margin-right: -${theme.magic}rem;
  box-shadow: 0px 2px 5px ${theme.colorGrey};

  @media (max-width: 1024px) {
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }

}

/* Inline code */
:not(pre) > code[class*="language-"] {
  line-height: ${theme.magic};
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #4C566A;
}

.token.punctuation {
  color: #E5E9F0;
}

.token.namespace {
  opacity: .7;
}

.token.operator,
.token.boolean,
.token.number {
  color: #81A1C1;
}
.token.property {
  color: #5E81AC;
}
.token.tag {
  color: #EBCB8B;
}
.token.string {
  color: #D08770;
}
.token.selector {
  color: #A3BE8C;
}
.token.attr-name {
  color: #81A1C1;
}
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #D08770;
}

.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit {
  color: #BF616A;
}

.token.statement,
.token.regex,
.token.atrule {
  color: #D08770;
}

.token.placeholder,
.token.variable {
  color: #EBCB8B;
}

.token.deleted {
  text-decoration: line-through;
}

.token.inserted {
  border-bottom: 1px dotted #8FBCBB;
  text-decoration: none;
}

.token.italic {
  font-style: italic;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.important {
  color: #88C0D0;
}

.token.entity {
  cursor: help;
}

pre > code.highlight {
  outline: .4em solid #88C0D0;
  outline-offset: .4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers .line-numbers-rows {
  border-right-color: #3B4252;
}

.line-numbers-rows > span:before {
  color: #434C5E;
}

/* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 * alpha transparency in 8 digits hex notation coming to a browser near you soon:
 * https://drafts.csswg.org/css-color/#hex-notation
 */
.line-highlight {
  background: #E5E9F033;
  background: linear-gradient(to right, #E5E9F033 70%, #E5E9F000);
}
`

export const Content = styled.article`
  margin: auto;
  max-width: 50rem;
  padding-left: 0;
  padding-right: 0;

  @media (max-width: 2160px) {
    max-width: 50vw;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
    margin: 0;
  }

  section {
    padding-top: ${theme.magic}rem;
  }

  section > *,
  section > * > li {
    :not(.gatsby-highlight) {
      padding-left: ${theme.magic}rem;
      padding-right: ${theme.magic}rem;

      @media (max-width: 1024px) {
        padding-left: ${theme.magic / 2}rem;
        padding-right: ${theme.magic / 2}rem;
      }
    }
  }
`

export const BoxedContent = styled(Content)`
  section {
    border-radius: ${theme.round};
    border: 1px solid ${theme.colorGreyLight};
    background-color: ${theme.colorWhite};

    @media (max-width: 1024px) {
      border: 0;
    }
  }
`

const Layout: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <IconContext.Provider
      value={{
        size: '3rem',
        className: 'react-icon',
      }}
    >
      <>
        <GlobalStyle />
        {children}
      </>
    </IconContext.Provider>
  </ThemeProvider>
)

export default Layout
