import styled from "styled-components"
import {
  space,
  layout,
  flexbox,
  grid,
  background,
  color,
  border,
  typography,
  compose,
  variant,
} from "styled-system"
import css from "@styled-system/css"

type BoxProps = {
  sx?: {
    text?: string[] | string
  }
}

const sx = ({ sx = {} }: BoxProps) => {
  const { text, ...styleProps } = sx
  if (text) {
    const textArray = typeof text === "string" ? [text] : text
    return css({
      variant: textArray.map((txt) => `text.${txt}`),
      ...styleProps,
    })
  }
  return css(styleProps)
}

const Box = styled.div(
  compose(typography, space, layout, flexbox, grid, background, color, border),
  sx
)

export default Box
