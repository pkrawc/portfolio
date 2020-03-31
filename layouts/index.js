import styled from "styled-components"
import Container from "components/container"
import { Heading } from "components/typography"
import Link from "next/link"

export default (frontMatter) => {
  return ({ children: content }) => {
    return (
      <Container my="4rem">
        <Heading as="h1" fontSize="4rem" mb="2rem">
          {frontMatter.title}
        </Heading>
        {content}
      </Container>
    )
  }
}
