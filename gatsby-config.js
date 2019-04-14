module.exports = {
  siteMetadata: {
    title: 'Excursion in Distraction',
    description: 'mostly software related ramblings',
    author: '@dsvensson',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-better-embed-video',
            options: {
              width: 654,
              height: 370,
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
              showInfo: false,
            },
          },
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-prismjs',
          'gatsby-remark-reading-time',
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 64,
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
        ],
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    //'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Excursion in Distraction',
        short_name: 'Excursion in Distraction',
        start_url: '/',
        background_color: '#cc0000',
        theme_color: '#cc0000',
        display: 'minimal-ui',
        icon: 'src/images/dopefish.gif', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/typography',
        omitGoogleFont: true,
      },
    },
  ],
}
