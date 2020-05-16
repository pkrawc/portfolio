import styled from "styled-components"
import { typography, space, color, flexbox } from "styled-system"

export const Heading = styled.h2`
  ${typography};
  ${space};
  ${color};
  ${flexbox};
`

Heading.defaultProps = {
  lineHeight: "short",
}

export const Text = styled.p`
  ${typography};
  ${space};
  ${color};
  ${flexbox};
`

Text.defaultProps = {
  lineHeight: "normal",
}
