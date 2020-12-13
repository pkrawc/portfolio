import glob from "glob"
import { GetStaticPaths, GetStaticProps } from "next"
import { getMdxFile, formatPath } from "@utils"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import Container from "@components/container"

export const getStaticPaths: GetStaticPaths = async function () {
  const paths = glob.sync("./content/posts/*.mdx").map((file) => ({
    params: { slug: formatPath(file).replace(/\/posts\//, "") },
  }))
  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async function ({
  // Apparently nothing with come through here except for expected named params
  // in the url pattern.
  params: { slug },
}) {
  const [{ content: postContent, data: frontMatter }] = getMdxFile([
    `./content/posts/${slug}.mdx`,
  ])
  const mdx = await renderToString(postContent)
  return { props: { mdx, frontMatter } }
}

export default function PostPage({ mdx, frontMatter }) {
  console.log(frontMatter)
  const content = hydrate(mdx)
  return <Container>{content}</Container>
}
