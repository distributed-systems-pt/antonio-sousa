const PostsQuery = `{
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            data_timestamp: date
            date(locale: "en-us", formatString: "DD [de] MMMM[,] YYYY")
            category
            description
            tags,
            background
          }
          fields {
            slug
          }
          objectID: id
          excerpt(pruneLength: 500)
        }
      }
    }
  }`;

const mapped = (posts) =>
  posts.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    data_timestamp: parseInt(
      (new Date(frontmatter.data_timestamp).getTime() / 10000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: PostsQuery,
    //transformer: ({ data }) => data.posts.edges.map(({ node }) => node),
    transformer: ({ data }) => mapped(data.posts.edges),
    indexName: "Posts", // overrides main index name, optional
    settings: {
      attributesToSnippet: ["excerpt: 20"],
    },
    //matchFields: ["slug", "modified"], // Array<String> overrides main match fields, optional
  },
];

module.exports = queries;
