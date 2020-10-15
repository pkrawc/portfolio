import React, { useEffect, useState, Fragment } from "react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import analytics from "react-ga"
import { ThemeProvider } from "styled-components"
import { DefaultSeo } from "next-seo"
import Link from "next/link"
import Sun from "mdi-react/WhiteBalanceSunnyIcon"
import Moon from "mdi-react/WeatherNightIcon"
import Base, { theme as baseTheme } from "@components/base"
import Container from "@components/container"
import Box from "@components/box"
import seo from "../seo.config"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const modes = ["light", "dark"]
  const [mode, setMode] = useState(modes[1])
  const [loaded, setLoaded] = useState(false)
  const theme = getTheme(mode)
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
  useEffect(() => {
    analytics.initialize("UA-112946294-4")
    router.events.on("beforeHistoryChange", handleHistoryChange)
    const { matches: prefersDarkMode } = window.matchMedia(
      "(prefers-color-scheme: dark)"
    )
    setMode(prefersDarkMode ? modes[1] : modes[0])
    setLoaded(true)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...seo} />
      <Base />
      {loaded && (
        <Fragment>
          <Container as="header" sx={{ py: "1rem", display: "flex" }}>
            <Link href="/">
              <a>Dreadful.</a>
            </Link>
            <Box
              as="button"
              onClick={toggleColorMode}
              sx={{
                display: "flex",
                appearance: "none",
                alignItems: "center",
                marginLeft: "auto",
                backgroundColor: "secondaryFont",
                border: "none",
                borderRadius: "4px",
                color: "background",
                height: "2rem",
                width: "2rem",
                transition: "200ms",
                cursor: "pointer",
                outline: "none",
                "&:hover, &:focus": { opacity: 0.5 },
                "&:focus": { boxShadow: "inset 0 0 0 2px #fff" },
              }}
            >
              {mode === "light" ? <Sun /> : <Moon />}
            </Box>
          </Container>
          <Component {...pageProps} mode={mode} />
        </Fragment>
      )}
    </ThemeProvider>
  )
}
