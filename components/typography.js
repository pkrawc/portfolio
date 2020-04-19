import styled from "styled-components"
import { typography, space, color } from "styled-system"

export const Heading = styled.h2`
  ${typography}
  ${space}
  ${color}
`

Heading.defaultProps = {
  lineHeight: "short",
}

export const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`

Text.defaultProps = {
  lineHeight: "normal",
}
