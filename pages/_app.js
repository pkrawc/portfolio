import React from "react"
import { default as NextApp, Container } from "next/app"
import Head from "next/head"
import GlobalStyles from "components/global"

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    return Component.getInitialProps ? { initialProps: await Component.getInitialProps(ctx) } : {}
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
