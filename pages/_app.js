import React from "react"
import { default as NextApp } from "next/app"
import Head from "next/head"
import Router from "next/router"
import Base from "components/base-styles"
import ReactGA from "react-ga"

export default class App extends NextApp {
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
    const { Component, pageProps } = this.props

    return (
      <>
        <Base />
        <Component {...pageProps} />
      </>
    )
  }
}
