import styled from "styled-components"
import { grid, space, layout } from "styled-system"

const Stack = styled.section`
  display: grid;
  ${space};
  ${layout};
  ${grid};
`

Stack.defaultProps = {
  gridGap: "1rem",
  gridAutoFlow: "row",
}

export default Stack
