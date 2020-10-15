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

const sx = ({ sx = {} }: { sx: object }) => css(sx)

const Box = styled("div")(
  compose(space, layout, flexbox, grid, background, color, border),
  sx
)

export default Box
