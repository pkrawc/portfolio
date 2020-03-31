import React, { useEffect, useState, createContext, Fragment } from "react"
import { useRouter } from "next/router"
import analytics from "react-ga"
import styled, { ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import Base, { theme as baseTheme } from "components/base"
import MDXComponents from "components/mdx"
import Container from "components/container"
import Link from "next/link"
import Sun from "mdi-react/WhiteBalanceSunnyIcon"
import Moon from "mdi-react/WeatherNightIcon"

const Header = styled(Container).attrs({ as: "header" })`
  display: flex;
  padding: 1rem 2rem;
  .mode-toggle {
    display: flex;
    appearance: none;
    margin-left: auto;
    justify-content: center;
    background: ${({ theme }) => theme.colors.secondaryFont};
    border: none;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.background};
    width: 2rem;
    height: 2rem;
    outline: none;
    cursor: pointer;
    transition: 100ms;
    &:hover {
      opacity: 0.75;
    }
  }
`

export default function App({ Component, pageProps }) {
  function toggleColorMode() {
    setMode((mode) => (mode === "light" ? modes[1] : modes[0]))
  }
  function getTheme(mode) {
    return {
      ...baseTheme,
      colors: { ...baseTheme.colors, ...baseTheme.colors.modes[mode] },
    }
  }
  function handleHistoryChange(url) {
    analytics.pageview(url)
  }
  const router = useRouter()
  const modes = ["light", "dark"]
  const [mode, setMode] = useState(modes[0])
  const [loaded, setLoaded] = useState(false)
  const theme = getTheme(mode)
  useEffect(() => {
    if (!window.analyticsMounted) analytics.initialize("UA-112946294-4")
    window.analyticsMounted = true
    router.events.on("beforeHistoryChange", handleHistoryChange)
    const { matches: prefersDarkMode } = window.matchMedia(
      "(prefers-color-scheme: dark)"
    )
    setMode(prefersDarkMode ? modes[1] : modes[0])
    setLoaded(true)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <Base />
        {loaded && (
          <Fragment>
            <Header>
              <Link href="/">
                <a>Dreadful.</a>
              </Link>
              <button className="mode-toggle" onClick={toggleColorMode}>
                {mode === "light" ? <Sun /> : <Moon />}
              </button>
            </Header>
            <Component {...pageProps} mode={mode} />
          </Fragment>
        )}
      </MDXProvider>
    </ThemeProvider>
  )
}
