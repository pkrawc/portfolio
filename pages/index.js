import { useState } from "react"
import styled from "styled-components"
import { colors } from "constants"
import Head from "next/head"
import Link from "next/link"
import Container from "components/container"
import { GitHub, FileText } from "react-feather"

const StyledHome = styled.main`
  background: ${colors.dark_blue};
  color: ${colors.grey_100};
  .hero__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    align-items: center;
    justify-items: center;
    min-height: calc(100vh);
    @media (min-width: 40rem) {
      grid-template-columns: auto auto;
    }
  }
  .hero__copy {
    position: relative;
    h4 {
      margin-top: 4rem;
      color: ${colors.green};
    }
    .work__list {
      list-style: none;
      display: flex;
      margin-bottom: 2rem;
      li:not(:last-of-type) {
        margin-right: 2rem;
      }
      h3 {
        color: ${colors.grey_500};
        cursor: pointer;
        &:hover {
          color: ${colors.green};
        }
      }
      h3.selected {
        color: ${colors.grey_100};
      }
    }
    .work__link {
      display: inline-flex;
      align-items: center;
      svg {
        margin-right: 1rem;
      }
    }
    .github {
      margin-right: 2rem;
    }
  }
`

const Device = styled.iframe`
  border-radius: 1rem;
  background: ${colors.grey_100};
  border: none;
  width: 30rem;
  height: 55rem;
  display: none;
  @media (min-width: 40rem) {
    display: initial;
  }
`

export default function Home() {
  const work = [
    {
      src: "https://transit.dreadful.design",
      title: "Dispatch",
      post: "/work/dispatch",
      github: "https://github.com/pkrawc/transit"
    },
    {
      src: "https://dashboard.dreadful.design",
      title: "Coinlance",
      post: "/work/coinlance",
      github: "https://github.com/pkrawc/coinlance"
    }
  ]
  const [selectedIdx, setSelectedIdx] = useState(0)
  return (
    <StyledHome>
      <Head>
        <title>Dreadful Design</title>
      </Head>
      <Container className="hero__container">
        <Device src={work[selectedIdx].src} />
        <section className="hero__copy">
          <h2>Dreadful Design</h2>
          <h1>
            I build experiences that are <span style={{ opacity: 0.24 }}>un</span>
            forgettable
          </h1>
          <p>
            Find me on <a href="https://dribbble.com/dreadful-design">Dribble</a>,{" "}
            <a href="https://github.com/pkrawc">Github</a>, or{" "}
            <a href="https://twitter.com/dreadful_ux">Twitter</a>.
          </p>
          <h4>Select Work</h4>
          <ul className="work__list">
            {work.map((item, idx) => (
              <li>
                <h3
                  className={idx === selectedIdx && "selected"}
                  onClick={e => setSelectedIdx(idx)}
                >
                  {item.title}
                </h3>
              </li>
            ))}
          </ul>
          <Link href={work[selectedIdx].github}>
            <a className="work__link github">
              <GitHub /> Github
            </a>
          </Link>
          <Link href={work[selectedIdx].post}>
            <a className="work__link casestudy">
              <FileText /> Case Study
            </a>
          </Link>
        </section>
      </Container>
    </StyledHome>
  )
}
