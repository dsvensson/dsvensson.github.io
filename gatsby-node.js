const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  {
    const blogPost = path.resolve('./src/templates/blog-post.tsx')
    const result = await graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
    if (result.errors) {
      return result
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 5

    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: path.resolve('./src/templates/blog-list.tsx'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    return posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const directory = path.posix.dirname(node.fileAbsolutePath)
    const parent = path.posix.dirname(directory)
    const value = path.posix.relative(parent, directory)
    createNodeField({
      name: 'slug',
      node,
      value: path.posix.join('posts', value),
    })
  }
}
