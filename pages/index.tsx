import { GetStaticProps } from "next"
import glob from "glob"
import { getFrontMatter } from "@utils"
import Container from "@components/container"
import Box from "@components/box"
import useWindowSize from "@hooks/useWindowResize"
import { useEffect, useRef, useState } from "react"

// const HomeWrapper = styled.main`
//   margin-bottom: 8rem;
//   .hero {
//     display: grid;
//     margin-top: 4rem;
//     min-height: 50vh;
//     align-items: center;
//     gap: 2rem;
//   }
// `

// const Post = styled(Box)`
//   cursor: pointer;
//   transition: 100ms;
//   border-radius: 0.25rem;
//   &:hover {
//     background: ${({ theme, mode }) =>
//       mode === "light" ? theme.colors.green_100 : theme.colors.green_900};
//     color: ${({ theme, mode }) =>
//       mode === "light" ? theme.colors.green_900 : theme.colors.green_300};
//   }
//   h3 {
//     margin-bottom: 1rem;
//   }
// `

// const ProjectWrapper = styled(Box)`
//   h4 {
//     cursor: pointer;
//     &:hover {
//       color: ${({ theme }) => theme.colors.font};
//     }
//   }
// `

// const LT = styled.span`
//   color: ${({ theme }) => theme.colors.secondary};
//   text-decoration: line-through;
// `

// function Project({ project, idx, active, setActive }) {
//   return (
//     <ProjectWrapper mt="2rem" key={project.__resourcePath}>
//       <Heading
//         as="h4"
//         color={active ? "secondaryFont" : "ui_700"}
//         fontSize="2rem"
//         onClick={(e) => setActive(idx)}
//         css="display:flex;align-items:center"
//       >
//         <span>{project.title}</span>
//         <Link href={formatPath(project.__resourcePath)}>
//           <ExternalLink css="margin-left:0.5rem" />
//         </Link>
//       </Heading>
//     </ProjectWrapper>
//   )
// }

function Device({ src }: { src: string }) {
  const fullWidth = 320
  const deviceRef = useRef(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    function handleScale() {
      setScale(Math.min(deviceRef.current.clientWidth / fullWidth, 1))
    }
    window.addEventListener("resize", handleScale)
    handleScale()
    return () => window.removeEventListener("resize", handleScale)
  }, [])
  return (
    <Box
      ref={deviceRef}
      as="figure"
      sx={{
        position: "relative",
        borderRadius: "1rem",
        bg: "primary",
        paddingTop: "217%",
        height: 0,
        width: "100%",
        overflow: "hidden",
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
          transformOrigin: "top left",
        }}
        style={{
          transform: `scale(${scale})`,
          width: `${100 / scale}%`,
          height: `${100 / scale}%`,
        }}
      />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  const postFiles = glob.sync("./content/posts/*.mdx")
  const projectFiles = glob.sync("./content/projects/*.mdx")
  const posts = getFrontMatter(postFiles)
  const projects = getFrontMatter(projectFiles)
  return { props: { posts, projects } }
}

export default function Homepage({ posts, projects }) {
  const [activeProject, setActive] = useState(0)
  const { width } = useWindowSize()
  const isMobile = width > 750
  return (
    <Container
      as="main"
      sx={{
        display: "grid",
        gridAutoFlow: "dense",
        gridTemplateColumns: "minmax(auto, 20rem) 1fr",
        minHeight: "calc(100vh - 10rem)",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <Box as="section" sx={{ gridColumn: ["span 2", "span 2", "span 1"] }}>
        <Device src={projects[activeProject].data.url} />
        <Box
          as="nav"
          sx={{
            display: "flex",
            mt: "1rem",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {projects.map((project: any, idx: number) => {
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
                  bg: isActive ? "primaryLight" : "secondary",
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
          &#128075; I'm Patrick, a <strong>Product Designer</strong> living in{" "}
          <strong>Chicago</strong>. My focus is web applications and products.
          You can mess around with some of my UI experiments{" "}
          {isMobile ? "to the left" : "below"}.
        </Box>
      </Box>
    </Container>
  )
}

// export default function Home({ mode }) {
//   const [activeIdx, setActive] = useState(0)
//   return (
//     <HomeWrapper>
//       <Container
//         className="hero"
//         gridTemplateColumns={["minmax(auto, 24rem) 1fr"]}
//       >
//         <Box
//           as="iframe"
//           sx={{
//             frameBorder: 0,
//             gridColumn: ["span 2", _, "span 1"],
//             borderRadius: "1rem",
//             height: "80vh",
//             width: "100%",
//             maxHeight: "40rem",
//             transform: "scale(0.75)",
//           }}
//           src={projects[activeIdx].url}
//         />
//         <Box
//           gridColumn={["span 2", "span 2", "span 1"]}
//           gridRow={[1, 1, "auto"]}
//         >
//           <Heading as="h1" fontSize={["headline", "hero"]}>
//             Dreadful Design
//           </Heading>
//           <Heading fontSize={["subtitle", "title"]} mt="1rem">
//             Experiences that are <LT>un</LT>forgettable.
//           </Heading>
//           <Stack gridAutoFlow="column">
//             {projects.map((project, idx) => {
//               const active = idx === activeIdx
//               return (
//                 <Project
//                   key={project.__resourcePath}
//                   project={project}
//                   idx={idx}
//                   active={active}
//                   setActive={setActive}
//                 />
//               )
//             })}
//           </Stack>
//         </Box>
//       </Container>
//       <Container mt="4rem">
//         <Stack as="ul" css="list-style: none;">
//           <Heading as="h4" fontSize="subtitle">
//             Articles
//           </Heading>
//           {posts.map((page) => (
//             <Link
//               key={page.__resourcePath}
//               href={formatPath(page.__resourcePath)}
//             >
//               <Post as="li" mx="-2rem" p="2rem" mode={mode}>
//                 <Stack>
//                   <Heading as="h4" fontSize="title">
//                     {page.title}
//                   </Heading>
//                   <Text>{page.summary}</Text>
//                   <Text>{page.readingTime.text}</Text>
//                 </Stack>
//               </Post>
//             </Link>
//           ))}
//         </Stack>
//       </Container>
//     </HomeWrapper>
//   )
// }
