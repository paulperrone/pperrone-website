// gatsby-config.js
module.exports = {
  plugins: [
    // Add support for *.mdx files in gatsby
    "gatsby-mdx",
    // Add a collection called "posts" that looks
    // for files in content/posts/
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        // Path on Linux
        // path: `${__dirname}/content/posts/`
        
        //Path on Windows
        path: `${__dirname}\\content\\posts\\`
      }
    }
  ]
};