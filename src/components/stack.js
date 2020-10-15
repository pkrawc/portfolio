import styled from "styled-components"
import { grid, space, layout, flexbox } from "styled-system"

const Stack = styled.section`
  display: grid;
  ${space};
  ${layout};
  ${grid};
  ${flexbox};
`

Stack.defaultProps = {
  gridGap: "2rem",
  gridAutoFlow: "row",
  justifyContent: "start",
  alignItems: "start",
}

export default Stack
