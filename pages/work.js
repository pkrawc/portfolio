import Prismic from "prismic-javascript"
import { Link, RichText, Date } from "prismic-reactjs"
import { DateTime } from "luxon"
import styled from "styled-components"
import { colors, endpoint } from "constants"
import NextLink from "next/link"

const Work = ({ doc }) => {
  const { data } = doc
  console.log(doc)
  return (
    <Page>
      <NextLink href="/">
        <h3 className="site-title">Dreadful Design</h3>
      </NextLink>
      <h1 className="title">{RichText.asText(data.title)}</h1>
      <p className="small">{DateTime.fromISO(doc.first_publication_date).toFormat("DD")}</p>
      <section className="write-up">{RichText.render(data.write_up)}</section>
    </Page>
  )
}

Work.getInitialProps = async ({ query }) => {
  const api = await Prismic.getApi(endpoint)
  const doc = await api.getByID(query.id)
  return { doc }
}

export default Work

const Page = styled.main`
  margin: 0 auto;
  padding: 4rem 2rem;
  max-width: 80rem;
  .site-title {
    color: ${colors.green};
    cursor: pointer;
    transition: 200ms;
    &:hover {
      color: ${colors.light_green};
    }
  }
  .title {
    margin-top: 4rem;
    font-weight: 700;
  }
  .small {
    margin-top: 1.25rem;
  }
  .write-up {
    font-weight: 300;
    margin-top: 2.625rem;
    h2,
    h3,
    h4 {
      margin: 2rem 0 1rem;
    }
    p {
      line-height: 1.5;
    }
  }
`
