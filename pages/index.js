import { useState } from "react"
import styled from "styled-components"
import { colors, endpoint } from "constants"
import Prismic from "prismic-javascript"
import { Link, RichText } from "prismic-reactjs"
import NextLink from "next/link"

const Home = ({ document }) => {
  const {
    data: { hero, subtitle, works }
  } = document
  const [selectedId, setSelectedId] = useState(works[0].work_link.id)
  const selectedWork = works.find(w => w.work_link.id === selectedId)
  return (
    <Main>
      <div className="container">
        <Device>
          <iframe src={Link.url(selectedWork.site_link)} frameBorder="0" />
        </Device>
        <Content>
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
                {RichText.render(work.title)}
              </WorkItem>
            ))}
          </WorkList>
          <section className="work-description">
            {RichText.render(selectedWork.description)}
            <a href={Link.url(selectedWork.github_link)} className="mdi mdi-github-circle" />
            <NextLink prefetch href={Link.url(selectedWork.work_link, linkResolver)}>
              <a className="project-link">Write up</a>
            </NextLink>
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
    min-height: 6rem;
    margin: 2rem 0;
    p {
      margin-bottom: 2rem;
    }
  }
  .mdi-github-circle {
    margin-right: 2rem;
  }
  .project-link {
    /* padding-bottom: 0.25rem; */
    border-bottom: 4px solid ${colors.green};
    transition: 200ms;
    &:hover {
      border-bottom: 1px solid ${colors.blue};
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
  &.selected {
    color: ${colors.light_green};
  }
`

export default Home
