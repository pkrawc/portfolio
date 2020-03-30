import styled from "styled-components"
import { space, layout } from "styled-system"

const Container = styled.section`
  ${space};
  ${layout};
`

Container.defaultProps = {
  maxWidth: "64rem",
  px: "2rem",
  mx: "auto",
}

export default Container
