import { useEffect, useState } from "react"
import { GetStaticProps } from "next"
import glob from "glob"
import { getMdxFile } from "@utils"
import Container from "@components/container"
import Box from "@components/box"
import useWindowSize from "@hooks/useWindowResize"

function Device({ src, ...props }: any) {
  useEffect(() => {}, [])
  return (
    <Box
      {...props}
      as="figure"
      sx={{
        position: "relative",
        borderRadius: "1rem",
        bg: "accent",
        paddingTop: "180%",
        height: 0,
        width: "100%",
        overflow: "hidden",
        transform: "rotateX(5deg) scale(0.85)",
        transformStyle: "preserve-3d",
      }}
    >
      <Box
        as="iframe"
        frameBorder="0"
        src={src}
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  const postFiles = glob.sync("./content/posts/*.mdx")
  const playgroundFiles = glob.sync("./content/playground/*.mdx")
  const posts = getMdxFile(postFiles)
  const playground = getMdxFile(playgroundFiles)
  return { props: { posts, playground } }
}

export default function Homepage({ posts, playground }) {
  const [activeProject, setActive] = useState(0)
  const { width } = useWindowSize()
  const isMobile = width > 750
  return (
    <Box as="main">
      <Container
        as="section"
        sx={{
          display: "grid",
          gridAutoFlow: "dense",
          gridTemplateColumns: "minmax(auto, 22rem) 1fr",
          minHeight: "calc(100vh - 20rem)",
          gap: "2rem",
          alignItems: "center",
          my: "2rem",
        }}
      >
        <Box
          as="section"
          sx={{
            gridColumn: ["span 2", "span 2", "span 1"],
            perspectiveOrigin: "top center",
            perspective: [0, 0, 500],
          }}
        >
          <Device src={playground[activeProject].data.url} />
          <Box
            as="nav"
            sx={{
              display: "flex",
              mt: "1rem",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            {playground.map((project: any, idx: number) => {
              const isActive = idx === activeProject
              return (
                <Box
                  as="button"
                  key={project.data.url}
                  sx={{
                    appearance: "none",
                    border: "none",
                    width: "1rem",
                    height: "1rem",
                    borderRadius: "50%",
                    bg: isActive ? "primary" : "secondary",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    transition: "200ms",
                    outline: "none",
                  }}
                  onClick={() => setActive(idx)}
                />
              )
            })}
          </Box>
        </Box>
        <Box
          as="section"
          sx={{
            gridColumn: ["span 2", "span 2", "span 1"],
            gridRowStart: ["1", "1", "auto"],
          }}
        >
          <Box as="h1">Dreadful Design</Box>
          <Box as="h2" sx={{ fontSize: "subtitle" }}>
            Experiences that are <s>un</s>forgettable.
          </Box>
          <Box
            as="h3"
            sx={{
              fontSize: "body",
              mt: "2rem",
              color: "secondaryFont",
              "> strong": { fontWeight: "black", color: "font" },
            }}
          >
            &#x1f44b; I'm Patrick, a <strong>Product Designer</strong> living in{" "}
            <strong>Chicago</strong>. My focus is on progressive web apps. You
            can mess around with some of my UI experiments{" "}
            {isMobile ? "to the left" : "below"}.
          </Box>
        </Box>
      </Container>
      <Container as="section" sx={{ mt: "4rem" }}>
        <Box as="h3">Projects</Box>
      </Container>
    </Box>
  )
}
