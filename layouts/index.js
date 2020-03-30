import styled from "styled-components"
import Container from "components/container"
import Box from "components/box"
import { Heading } from "components/typography"
import Link from "next/link"

const BlogContainer = styled(Container)`
  h2 {
    font-weight: 360;
  }
`

export default (frontMatter) => {
  return ({ children: content }) => {
    return (
      <BlogContainer my="4rem">
        <Heading as="h1" fontSize="4rem" mb="2rem">
          {frontMatter.title}
        </Heading>
        {content}
      </BlogContainer>
    )
  }
}
