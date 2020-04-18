// const path = require("path");
// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;
//
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
//
//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___number] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             excerpt(pruneLength: 250)
//             html
//             id
//             frontmatter {
//               path
//               title
//               number
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }
//
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//         context: {} // additional data can be passed via context
//       });
//     });
//   });
// };

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case "build-html":
      config.loader("null", {
        test: /lazysizes/,
        loader: "null-loader"
      });
      break;

    case "build-html":
      config.loader("null", {
        test: /react-scroll/,
        loader: "null-loader"
      });
      break;
  }
  return config;
};
