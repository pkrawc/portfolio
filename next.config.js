const withMdxEnhanced = require("next-mdx-enhanced")
const mdxPrism = require("mdx-prism")
const readingTime = require("reading-time")

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  rehypePlugins: [mdxPrism],
  extendFrontMatter: {
    process: content => ({
      readingTime: readingTime(content)
    })
  }
})()
