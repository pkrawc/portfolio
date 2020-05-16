const withMdxEnhanced = require("next-mdx-enhanced")
const readingTime = require("reading-time")

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (content) => ({
      readingTime: readingTime(content),
    }),
  },
})()
