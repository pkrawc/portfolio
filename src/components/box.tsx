import styled from "styled-components"
import {
  space,
  layout,
  flexbox,
  grid,
  background,
  color,
  border,
  compose,
} from "styled-system"
import css from "@styled-system/css"

const sx = ({ sx = {} }: any) => {
  const { text, ...styleProps } = sx
  if (text) {
    return css({
      variant: [...text].map((txt) => `text.${txt}`),
      ...styleProps,
    })
  }
  return css(styleProps)
}

type BoxProps = {
  sx?: any
}

const Box = styled("div")<BoxProps>(
  compose(space, layout, flexbox, grid, background, color, border),
  sx
)

export default Box
