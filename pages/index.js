import { useState } from "react"
import styled from "styled-components"
import { colors } from "constants"
import Prismic from "prismic-javascript"
import { Link, RichText, Date } from "prismic-reactjs"

const Home = ({ document }) => {
  const {
    data: { hero, subtitle, works }
  } = document
  console.log(works)
  const [selectedId, setSelectedId] = useState(works[0].work_link.id)
  const selectedWork = works.find(w => w.work_link.id === selectedId)
  return (
    <Main>
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
        <p className="work-description">
          {RichText.render(selectedWork.description, linkResolver)}
        </p>
      </Content>
    </Main>
  )
}

function linkResolver(doc) {
  // Define the url depending on the document type
  if (doc.type === "work") {
    return "/work/" + doc.uid
  } else if (doc.type === "blog_post") {
    return "/blog/" + doc.uid
  }
  // Default to homepage
  return "/"
}

Home.getInitialProps = async () => {
  try {
    const api = await Prismic.api("https://dreadful.cdn.prismic.io/api/v2")
    const document = await api.getSingle("homepage")
    return { document }
  } catch (err) {
    return { error: err }
  }
}

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 4rem;
  padding: 2rem;
  color: ${colors.grey_100};
  min-height: 100vh;
  max-width: 100rem;
  margin: 0 auto;
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
