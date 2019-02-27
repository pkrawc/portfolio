import { useState } from "react"
import styled from "styled-components"
import { colors } from "constants"

const Home = props => {
  const [works, setSelected] = useState([
    { name: "Dashboard", url: "https://dashboard.dreadful.design", selected: true },
    { name: "Garden Maze", url: "https://maze.dreadful.design", selected: false },
    { name: "Crossword Builder", url: "https://crossword.dreadful.design", selected: false },
    { name: "State Matters", url: "https://www.statematters.org", selected: false }
  ])
  const selectedWork = works.find(w => w.selected)
  return (
    <Main>
      <Device>
        <iframe src={selectedWork.url} frameBorder="0" />
      </Device>
      <Content>
        <h3>
          <Emoji code="\1F596" /> Hi there.
        </h3>
        <h1>
          I design experiences that are <del>un</del>forgettable.
        </h1>
        <h2>
          Find me on <a href="https://dribbble.com/dreadful-design">Dribbble</a>,{" "}
          <a href="https://github.com/pkrawc">Github</a> or{" "}
          <a href="https://twitter.com/dreadful_ux">Twitter</a>.
        </h2>
        <p className="title">Selected Work</p>
        <WorkList>
          {works.map((work, i) => (
            <WorkItem
              key={i}
              className={work.selected && "selected"}
              onClick={e =>
                setSelected(
                  works.map((w, ci) =>
                    ci === i ? { ...w, selected: true } : { ...w, selected: false }
                  )
                )
              }>
              {work.name}
            </WorkItem>
          ))}
        </WorkList>
      </Content>
    </Main>
  )
}

Home.getInitialProps = async () => {
  return {}
}

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
  background: ${colors.dark_blue};
  color: ${colors.grey_100};
  min-height: 100vh;
`

const Emoji = styled.span`
  &:after {
    content: "${props => props.code}";
  }
`

const Device = styled.div`
  grid-column: span 12;
  width: 30rem;
  height: 60rem;
  background: ${colors.grey_100};
  border: none;
  border-radius: 12px;
  align-self: center;
  justify-self: center;
  overflow: hidden;
  position: relative;
  iframe {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 60rem) {
    grid-column: 1 / span 5;
    grid-row: 1 / span 1;
  }
`

const Content = styled.section`
  align-self: center;
  grid-column: span 12;
  grid-row: 1 / span 1;
  .title {
    color: ${colors.blue};
  }
  @media (min-width: 60rem) {
    grid-column: span 7;
    grid-row: span 1;
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
