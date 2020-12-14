import styled from "styled-components"
import Box from "@components/box"
import { Heading, Text } from "@components/typography"
import CodeBlock from "@components/code-block"

export default {
  h1: (props) => (
    <Box {...props} as="h1" sx={{ text: ["hero", "heading"], my: "3rem" }} />
  ),
  h2: (props) => (
    <Box
      {...props}
      as="h2"
      sx={{ my: "2rem", text: ["subtitle", "heading"] }}
    />
  ),
  h3: (props) => (
    <Heading {...props} as="h3" mt={3} fontSize={["body", "subtitle"]} />
  ),
  p: (props) => <Text {...props} mt={2} />,
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
  img: (props) => <img {...props} style={{ maxWidth: "100%" }} />,
  strong: (props) => <strong {...props} style={{ fontWeight: "800" }} />,
}
