import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import Container from "components/container"
import Box from "components/box"
import Stack from "components/stack"
import { Text, Heading } from "components/typography"
import { frontMatter as posts } from "./blog/**/*.mdx"
import { frontMatter as projects } from "./projects/**/*.mdx"

function formatPath(path) {
  return path.replace(/\.mdx$/, "")
}

const HomeWrapper = styled.main`
  margin-bottom: 8rem;
  .hero {
    display: grid;
    margin-top: 4rem;
    min-height: 50vh;
    align-items: center;
    grid-template-columns: 22rem auto;
    gap: 2rem;
  }
`

const PreviewDevice = styled(Box)``

const PostList = styled.ul`
  list-style: none;
`

const Post = styled(Box)`
  cursor: pointer;
  transition: 100ms;
  border-radius: 0.25rem;
  &:hover {
    background: ${({ theme, mode }) =>
      mode === "light" ? theme.colors.green_100 : theme.colors.green_900};
    color: ${({ theme, mode }) =>
      mode === "light" ? theme.colors.green_900 : theme.colors.green_300};
  }
  h3 {
    margin-bottom: 1rem;
  }
`

export default function Home({ mode }) {
  const [activeIdx, setActive] = useState(0)
  console.log(projects)
  return (
    <HomeWrapper>
      <Container className="hero">
        <PreviewDevice
          as="iframe"
          frameBorder="0"
          gridColumn={["span 2", "span 2", "span 1"]}
          borderRadius="1rem"
          width="100%"
          height="80vh"
          src={projects[activeIdx].url}
        />
        <Box
          gridColumn={["span 2", "span 2", "span 1"]}
          gridRow={[1, 1, "auto"]}
        >
          <Heading as="h1" fontSize="hero">
            Dreadful Design
          </Heading>
          <Heading fontSize="title" mt="1rem">
            I build experiences that are <strike>un</strike>forgettable.
          </Heading>
          <Stack gridAutoFlow="column">
            {projects.map((project, idx) => {
              const active = idx === activeIdx
              return (
                <Box mt="2rem" key={project.__resourcePath}>
                  <Heading
                    as="h4"
                    color={active ? "ui_700" : "ui_500"}
                    fontSize="2rem"
                  >
                    {project.title}
                  </Heading>
                  <Link href={formatPath(project.__resourcePath)}>
                    <Text as="a">Process</Text>
                  </Link>
                </Box>
              )
            })}
          </Stack>
        </Box>
      </Container>
      <Container mt="4rem">
        <Heading as="h4" mb="2rem" fontSize="subtitle">
          Articles
        </Heading>
        <Stack as="ul" css="list-style: none;">
          {posts.map((page) => (
            <Link
              key={page.__resourcePath}
              href={formatPath(page.__resourcePath)}
            >
              <Post as="li" mx="-2rem" p="2rem" mode={mode}>
                <Stack>
                  <Heading as="h4" fontSize="title">
                    {page.title}
                  </Heading>
                  <Text>{page.summary}</Text>
                  <Text>{page.readingTime.text}</Text>
                </Stack>
              </Post>
            </Link>
          ))}
        </Stack>
      </Container>
    </HomeWrapper>
  )
}
