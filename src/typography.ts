import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.7,
  blockMarginBottom: 1,
  headerFontFamily: ['Lato'],
  bodyFontFamily: ['Lora'],
  headerWeight: 900,
  bodyWeight: 100,
  boldWeight: 600,
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.73)',
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    html: {
      overflowX: 'hidden',
    },
    'code, pre': {
      ...adjustFontSizeTo(options.baseFontSize),
    },
    'h1,h2,h3,h4,h5,h6': {
      'text-transform': 'uppercase',
    },
    h1: {
      fontSize: rhythm(17 / 9),
    },
    h2: {
      fontSize: rhythm(12 / 9),
    },
    'h2 > a': {
      color: 'hsla(0,0%, 0%, 0.9)',
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: `${(16 / 16) * 100}%`,
        bodyColor: 'hsla(0,0%,0%,0.83)',
      },
      h1: {
        fontSize: rhythm(12 / 9),
      },
      h2: {
        fontSize: rhythm(12 / 9),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
})

export default typography
