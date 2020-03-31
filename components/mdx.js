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
  h1: (props) => <Heading {...props} as="h1" my={3} />,
  h2: (props) => <Heading {...props} as="h2" my={2} fontWeight="360" />,
  h3: (props) => <Heading {...props} as="h3" mt={3} fontSize="2rem" />,
  p: (props) => <Text {...props} mt={2} lineHeight="normal" />,
  inlineCode: (props) => <Code {...props} as="code" />,
  pre: (props) => <Box {...props} as="pre" my="2rem" display="block" />,
  img: (props) => <img {...props} style={{ maxWidth: "100%" }} />,
}
