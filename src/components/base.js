import { createGlobalStyle, css } from "styled-components"
import { color } from "styled-system"

const fontSizes = {
  small: "1rem",
  body: "1.5rem",
  subtitle: "2rem",
  title: "3rem",
  headline: "4rem",
  hero: "5rem",
}

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
    accent: colors.blue_500,
  },
  light: {
    font: colors.blue_900,
    secondaryFont: colors.blue_700,
    background: colors.ui_100,
    primary: colors.green_500,
    primaryLight: colors.green_300,
    accent: colors.blue_500,
  },
}

const lineHeights = {
  short: 1.25,
  normal: 1.5,
  long: 2,
}

const breakPoints = ["40rem", "60rem", "80rem", "100rem", "120rem"]

export const theme = {
  breakPoints,
  colors,
  fonts: {
    body: `"Crimson Pro", serif`,
    code: `"Hack", monospace`,
  },
  fontSizes,
  fontWeights: {
    light: 200,
    normal: 400,
    bold: 600,
    black: 800,
  },
  lineHeights,
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72],
}

export default createGlobalStyle(
  ({ theme: { fonts, fontSizes, fontWeights, lineHeights, colors } }) => css`
    * {
      box-sizing: border-box;
    }
    :root {
      font-size: 16px;
    }
    html,
    body,
    div,
    span,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strong,
    sub,
    sup,
    var,
    b,
    u,
    i,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
    }
    body {
      font-size: ${fontSizes.body};
      line-height: ${lineHeights.normal};
      font-family: ${fonts.body};
      background: ${colors.background};
      color: ${colors.font};
      font-feature-settings: "kern", "liga", "clig", "calt";
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      line-height: ${lineHeights.short};
    }
    h1 {
      font-size: ${fontSizes.hero};
      font-weight: ${fontWeights.light};
    }
    h2 {
      font-size: ${fontSizes.headline};
    }
    h3 {
      font-size: ${fontSizes.title};
      font-weight: ${fontWeights.normal};
    }
    h4 {
      font-size: ${fontSizes.subtitle};
      font-weight: ${fontWeights.bold};
    }
    a {
      color: ${colors.primary};
      font-weight: ${fontWeights.normal};
      text-decoration: none;
      transition: 100ms;
      &:hover {
        color: ${colors.primaryLight};
      }
    }
    .small {
      font-size: ${fontSizes.small};
    }
  `
)
