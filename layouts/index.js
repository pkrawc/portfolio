import { Fragment } from "react"
import Container from "components/container"
import { Heading } from "components/typography"
import { NextSeo, ArticleJsonLd } from "next-seo"
import { formatPath } from "utils"

function Seo({ title, summary, publishedAt, slug, image }) {
  const date = new Date(publishedAt).toISOString()
  const url = `https://dreadful.design/${slug}`
  return (
    <Fragment>
      <NextSeo
        title={title}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
        }}
      />
      <ArticleJsonLd
        authorName="Patrick Krawczykowski"
        dateModified={date}
        datePublished={date}
        description={summary}
        publisherLogo="/android-chrome-192x192.png"
        publisherName="Patrick Krawczykowski"
        title={title}
        url={url}
      />
    </Fragment>
  )
}

export default (frontMatter) => {
  return ({ children: content }) => {
    return (
      <Container my="4rem">
        <Seo {...frontMatter} slug={formatPath(frontMatter.__resourcePath)} />
        <Heading as="h1" fontSize="4rem" mb="2rem">
          {frontMatter.title}
        </Heading>
        {content}
      </Container>
    )
  }
}
