import styled from "styled-components"
import {} from "styled-system"
import { Heading, Text } from "components/typography"
import Box from "components/box"

const Code = styled.code`
  padding: 0.25rem;
  background: ${({ theme }) => theme.colors.green_300};
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.code};
  font-weight: 600;
  font-size: 1rem;
`

export default {
  h1: (props) => <Heading as="h1" my={3} {...props} />,
  h2: (props) => <Heading as="h2" my={2} {...props} />,
  p: (props) => <Text mt={4} lineHeight="normal" {...props} />,
  inlineCode: (props) => <Code as="code" {...props} />,
  pre: (props) => <Box as="pre" my="2rem" display="block" {...props} />,
}
