import React from "react"
import { default as NextApp, Container } from "next/app"
import Head from "next/head"
import Router from "next/router"
import GlobalStyles from "components/global"
import ReactGA from "react-ga"

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    return Component.getInitialProps ? { initialProps: await Component.getInitialProps(ctx) } : {}
  }

  handleHistoryChange = url => {
    ReactGA.pageview(url)
  }

  componentDidMount() {
    if (!window.analytics) {
      ReactGA.initialize("UA-112946294-4")
      window.analytics = true
    }
    Router.events.on("beforeHistoryChange", this.handleHistoryChange)
  }

  render() {
    const { Component, initialProps } = this.props

    return (
      <Container>
        <Head>
          <title>Dreadful Design.</title>
        </Head>
        <GlobalStyles />
        <Component {...initialProps} />
      </Container>
    )
  }
}
