import Box from "@components/box"
import CodeBlock from "@components/code-block"

export default {
  h1: (props) => (
    <Box
      {...props}
      as="h1"
      sx={{
        text: ["title", "headline", "hero"],
        my: "3rem",
      }}
    />
  ),
  h2: (props) => (
    <Box
      {...props}
      as="h2"
      sx={{ my: "2rem", text: ["emphasis", "subtitle", "headline"] }}
    />
  ),
  h3: (props) => (
    <Box {...props} as="h3" sx={{ mt: "3rem", text: ["body", "subtitle"] }} />
  ),
  p: (props) => <Box {...props} sx={{ mt: "2rem" }} />,
  a: (props) => <Box {...props} as="a" sx={{ fontWeight: "inherit" }} />,
  inlineCode: (props) => (
    <Box
      {...props}
      as="code"
      sx={{
        p: "0.25rem",
        bg: "accent",
        borderRadius: "0.25rem",
        color: "font",
        fontFamily: "code",
        fontWeight: "bold",
        fontSize: "small",
      }}
    />
  ),
  pre: CodeBlock,
  img: (props) => <Box as="img" {...props} sx={{ maxWidth: "100%" }} />,
  strong: (props) => <Box as="strong" {...props} sx={{ fontWeight: "800" }} />,
}
