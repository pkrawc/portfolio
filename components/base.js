import { createGlobalStyle } from "styled-components"
import { color } from "styled-system"

const fontSizes = ["1rem", "1.5rem", "2rem", "3rem", "4rem", "5rem"]

fontSizes.small = fontSizes[0]
fontSizes.body = fontSizes[1]
fontSizes.subtitle = fontSizes[2]
fontSizes.title = fontSizes[3]
fontSizes.headline = fontSizes[4]
fontSizes.hero = fontSizes[5]

const colors = {
  blue_100: "#DFEBF2",
  blue_300: "#93BCD7",
  blue_500: "#5392BC",
  blue_700: "#07456F",
  blue_900: "#232D33",

  green_100: "#f2ffff",
  green_300: "#b4eceb",
  green_500: "#7ddad8",
  green_700: "#009f9d",
  green_900: "#066663",

  ui_100: "#FCFFFE",
  ui_300: "#E4E6E5",
  ui_500: "#CBCDCD",
  ui_700: "#4E4F4F",
  ui_900: "#191A19",
}

colors.modes = {
  dark: {
    font: colors.blue_100,
    secondaryFont: colors.blue_300,
    background: colors.blue_900,
    primary: colors.green_500,
    primaryLight: colors.green_300,
    secondary: colors.blue_500,
  },
  light: {
    font: colors.blue_900,
    secondaryFont: colors.blue_700,
    background: colors.ui_100,
    primary: colors.green_500,
    primaryLight: colors.green_300,
    secondary: color.blue_500,
  },
}

const lineHeights = [1.25, 1.5, 2]

lineHeights.short = lineHeights[0]
lineHeights.normal = lineHeights[1]
lineHeights.long = lineHeights[2]

const breakPoints = ["40rem", "60rem", "80rem", "100rem", "120rem"]

export const theme = {
  breakPoints,
  colors,
  fonts: {
    body: `"Crimson Pro", serif`,
    code: `"Hack", monospace`,
  },
  fontSizes,
  lineHeights: lineHeights,
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72],
}

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  :root {
    font-size: 16px;
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
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.font};
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
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 800;
    transition: 100ms;
    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
  .small {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`
