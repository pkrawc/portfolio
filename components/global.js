import { createGlobalStyle } from "styled-components"
import { colors } from "constants"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root {
    font-size: 12px;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 1.5rem;
    font-family: 'Spectral', serif;
    background: ${colors.grey_100};
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  h1, h2, h3, h4, p {
    margin: 0;
  }
  h1 {
    font-size: 4rem;
    font-weight: 300;
  }
  h2 {
    font-size: 3rem;
    font-weight: 300;
  }
  h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }
  h4 {
    font-size: 2rem;
    font-weight: 800;
  }
  a {
    color: ${colors.green};
    text-decoration: none;
    font-weight: 700;
    transition: 200ms;
    &:hover {
      color: ${colors.light_green};
    }
  }
  .small {
    font-size: 1.25rem;
  }
`
