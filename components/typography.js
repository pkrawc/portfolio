import styled from "styled-components"
import { typography, space, color } from "styled-system"
import { theme } from "components/base"

export const Heading = styled.h2`
  ${typography}
  ${space}
  ${color}
`

Heading.defaultProps = {
  fontSize: theme.fontSizes.title,
  lineHeight: theme.lineHeights.short,
  fontFamily: theme.fonts.body,
}

export const Text = styled.p`
  ${typography}
  ${space}
  ${color}
`

Text.defaultProps = {
  fontSize: theme.fontSizes.body,
  lineHeight: theme.lineHeights.normal,
  fontFamily: theme.fonts.body,
}
