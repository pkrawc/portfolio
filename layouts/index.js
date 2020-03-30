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

const Header = styled(Box).attrs({ as: "header" })`
  display: flex;
`

export default (frontMatter) => {
  return ({ children: content }) => {
    return (
      <BlogContainer my="4rem">
        <Header>
          <Link href="/">
            <a>Back</a>
          </Link>
        </Header>
        <Heading as="h1" fontSize="4rem" mb="2rem">
          {frontMatter.title}
        </Heading>
        {content}
      </BlogContainer>
    )
  }
}
