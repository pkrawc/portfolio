import { useState } from "react"
import styled from "styled-components"
import { colors, endpoint } from "constants"
import Prismic from "prismic-javascript"
import { Link, RichText } from "prismic-reactjs"
import NextLink from "next/link"
import { useSpring, animated } from "react-spring"

const Home = ({ document }) => {
  const {
    data: { hero, subtitle, works }
  } = document
  const [selectedId, setSelectedId] = useState(works[0].work_link.id)
  const selectedWork = works.find(w => w.work_link.id === selectedId)
  const deviceProps = useSpring({
    opacity: 1,
    transform: "translate3d(0,0,0) scale(1)",
    from: { opacity: 0, transform: "translate3d(0,12px,0) scale(0.9)" },
    delay: 400,
    config: {
      tension: 245,
      friction: 20
    }
  })
  const contentProps = useSpring({
    opacity: 1,
    transform: "translate3d(0,0,0) scale(1)",
    from: { opacity: 0, transform: "translate3d(-24px,24px,0) scale(0.96)" },
    config: {
      tension: 245,
      friction: 20
    }
  })
  return (
    <Main>
      <div className="container">
        <Device as={animated.div} style={deviceProps}>
          <iframe src={Link.url(selectedWork.site_link)} frameBorder="0" />
        </Device>
        <Content as={animated.section} style={contentProps}>
          <h3>
            <Emoji code="\1F596" /> Hi there.
          </h3>
          {RichText.render(hero)}
          {RichText.render(subtitle)}
          <p className="title">Selected Work</p>
          <WorkList>
            {works.map(work => (
              <WorkItem
                key={work.work_link.id}
                className={work.work_link.id === selectedId && "selected"}
                onClick={e => setSelectedId(work.work_link.id)}>
                <a>{RichText.render(work.title)}</a>
              </WorkItem>
            ))}
          </WorkList>
          <section className="work-description">
            {RichText.render(selectedWork.description)}
            <div className="links">
              <a href={Link.url(selectedWork.github_link)} className="mdi mdi-github-circle">
                Source.
              </a>
              <NextLink prefetch href={Link.url(selectedWork.work_link, linkResolver)}>
                <a className="mdi mdi-clipboard-text-outline">Process.</a>
              </NextLink>
            </div>
          </section>
        </Content>
      </div>
    </Main>
  )
}

function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === "work") {
    return `/work?id=${doc.id}`
  }
  // Default to homepage
  return "/"
}

Home.getInitialProps = async () => {
  try {
    const api = await Prismic.api(endpoint)
    const document = await api.getSingle("homepage")
    return { document }
  } catch (err) {
    return { error: err }
  }
}

const Main = styled.main`
  background: ${colors.dark_blue};
  color: ${colors.grey_100};
  .container {
    min-height: 100vh;
    max-width: 100rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 4rem;
    padding: 2rem;
  }
`

const Emoji = styled.span`
  &:after {
    content: "${props => props.code}";
  }
`

const Device = styled.div`
  width: 30rem;
  height: 60rem;
  background: ${colors.grey_100};
  border: none;
  border-radius: 12px;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  position: relative;
  grid-column: span 2;
  grid-row: 2;
  iframe {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 60rem) {
    grid-column: span 1;
    grid-row: 1;
  }
`

const Content = styled.section`
  align-self: center;
  grid-column: span 2;
  h2 {
    margin: 2rem 0;
  }
  em {
    text-decoration: line-through;
  }
  .title {
    color: ${colors.blue};
    margin-bottom: 0.75rem;
  }
  .work-description {
    display: flex;
    flex-direction: column;
    min-height: 12rem;
    margin: 2rem 0;
    .links {
      margin-top: auto;
    }
    p {
      margin-bottom: 2rem;
    }
  }
  .mdi {
    margin-right: 2rem;
    &:before {
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 60rem) {
    grid-column: span 1;
  }
`

const WorkList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`

const WorkItem = styled.li`
  color: ${colors.green};
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
  &.selected a {
    color: ${colors.light_green};
  }
`

export default Home
