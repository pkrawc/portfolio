import * as fs from "fs"
import matter from "gray-matter"

export function formatPath(path: string) {
  return path.replace(/\.\/content/, "").replace(/\.mdx/, "")
}

export function getMdxFile(files: string[]) {
  return files.map((file: string) => {
    const slug = formatPath(file)
    const source = fs.readFileSync(file, "utf-8")
    const { data, content } = matter(source)
    return { content, data, slug }
  })
}
