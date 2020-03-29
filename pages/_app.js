import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Base, { theme } from "components/base-styles"
import analytics from "react-ga"
import { ThemeProvider } from "styled-components"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  function handleHistoryChange(url) {
    analytics.pageview(url)
  }
  useEffect(() => {
    if (!window.analyticsMounted) analytics.initialize("UA-112946294-4")
    window.analyticsMounted = true
    router.events.on("beforeHistoryChange", handleHistoryChange)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Base />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
