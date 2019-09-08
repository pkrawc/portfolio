import { createGlobalStyle } from "styled-components"
import { colors } from "constants"

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    font-size: 12px;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 1.5rem;
    line-height: 1.334;
    font-family: 'Spectral', serif;
    background: ${colors.grey_100};
    color: ${colors.grey_900};
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  h1, h2, h3, h4, h5 {
    line-height: 1.5;
  }
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
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
