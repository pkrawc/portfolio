import React, { useEffect, useState, Fragment, useReducer } from "react"
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

type ColorModeType = {
  systemDefault?: boolean
  modes?: string[]
}

function useColorMode({
  systemDefault = true,
  modes = ["light", "dark"],
}: ColorModeType = {}) {
  const reducer = (state, newState) => ({ ...state, ...newState })
  const [modeState, set] = useReducer(reducer, {
    modes,
    currentMode: modes[0],
    loaded: false,
  })
  useEffect(() => {
    const { matches: darkMode } = window.matchMedia(
      "(prefers-color-scheme: dark)"
    )
    if (systemDefault && darkMode) set({ currentMode: "dark" })
    set({ loaded: true })
  }, [])
  return [modeState, set]
}

function getTheme(mode, baseTheme) {
  return {
    ...baseTheme,
    colors: { ...baseTheme.colors, ...baseTheme.colors.modes[mode] },
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [{ currentMode, loaded, modes }, setMode] = useColorMode()
  const theme = getTheme(currentMode, baseTheme)
  function toggleColorMode() {
    setMode({
      currentMode:
        modes[(modes.findIndex((el) => el === currentMode) + 1) % modes.length],
    })
  }
  function handleHistoryChange(url) {
    analytics.pageview(url)
  }
  useEffect(() => {
    analytics.initialize("UA-112946294-4")
    router.events.on("beforeHistoryChange", handleHistoryChange)
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
              {currentMode === "light" ? <Sun /> : <Moon />}
            </Box>
          </Container>
          <Component {...pageProps} mode={currentMode} />
        </Fragment>
      )}
    </ThemeProvider>
  )
}
