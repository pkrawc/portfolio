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
    font-size: 1.33rem;
    font-family: "Vesterbro", sans-serif;
    background: ${colors.grey_100};
  }
  h1, h2, h3, h4 {
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
    font-weight: 900;
  }
  a {
    color: ${colors.green};
    text-decoration: none;
    font-weight: 700;
  }
  .small {
    font-size: 1.25rem;
  }
  @media (min-width: 40rem) {
    body {
      font-size: 2rem;
    }
    .small {
      font-size: 1.5rem;
    }
  }
  @font-face {
    font-family: "Vesterbro";
    src: url("/static/fonts/Vesterbro-Light.woff2") format("woff2");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Vesterbro";
    src: url("/static/fonts/Vesterbro-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Vesterbro";
    src: url("/static/fonts/Vesterbro-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Vesterbro";
    src: url("/static/fonts/Vesterbro-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Vesterbro";
    src: url("/static/fonts/Vesterbro-Extrabold.woff2") format("woff2");
    font-weight: 900;
    font-style: normal;
  }
`
