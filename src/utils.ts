import * as fs from "fs"
import matter from "gray-matter"
import { useCallback, useEffect, useReducer } from "react"

export function formatPath(path) {
  return path.replace(/\.\/content/, "").replace(/\.mdx/, "")
}

export function getFrontMatter(files: string[]) {
  return files.map((file: string) => {
    const slug = formatPath(file)
    const source = fs.readFileSync(file, "utf-8")
    const { data } = matter(source)
    return { data, slug }
  })
}
