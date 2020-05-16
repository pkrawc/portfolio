import styled from "styled-components"
import { space, layout, grid, flexbox } from "styled-system"

const Container = styled.section`
  ${space};
  ${layout};
  ${grid};
  ${flexbox};
`

Container.defaultProps = {
  maxWidth: "64rem",
  px: "2rem",
  mx: "auto",
}

export default Container
