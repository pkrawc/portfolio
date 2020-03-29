import { createGlobalStyle } from "styled-components"

const fontSizes = ["1.5rem", "2rem", "3rem", "4rem", "5rem", "6rem"]

fontSizes.small = fontSizes[0]
fontSizes.body = fontSizes[1]
fontSizes.subtitle = fontSizes[2]
fontSizes.title = fontSizes[3]
fontSizes.headline = fontSizes[4]
fontSizes.hero = fontSizes[5]

const colors = {
  light_green: "#cdffeb",
  green: "#009f9d",
  blue: "#07456f",
  dark_blue: "#0f0a3c",

  grey_100: "#FCFCFF",
  grey_300: "#92909C",
  grey_500: "#454356",
  grey_700: "#1B1832",
  grey_900: "#060324",
}

const lineHeights = [1.25, 1.5, 2]

lineHeights.short = lineHeights[0]
lineHeights.normal = lineHeights[1]
lineHeights.long = lineHeights[2]

export const theme = {
  colors,
  fonts: {
    body: `"Spectral", serif`,
  },
  fontSizes,
  lineHeights: [1.25, 1.334, 1.5],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72],
}

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  :root {
    font-size: ${({ theme }) => theme.space[1]}px;
  }
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strong, sub, sup, var,
  b, u, i, dl, dt, dd, ol, ul, li,
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
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.grey_100};
    color: ${({ theme }) => theme.colors.grey_900};
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  h1, h2, h3, h4, h5 {
    line-height: ${({ theme }) => theme.lineHeights.short};
  }
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.hero};
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.headline};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: 400;
  }
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.subtitle};
    font-weight: 800;
  }
  a {
    color: ${({ theme }) => theme.colors.green};
    text-decoration: none;
    font-weight: 700;
    transition: 200ms;
    &:hover {
      color: ${({ theme }) => theme.colors.light_green};
    }
  }
  .small {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`
