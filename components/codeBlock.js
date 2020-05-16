import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import Highlight, { Prism } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/palenight"
import { LiveProvider, LiveError, LivePreview } from "react-live"
import { mdx } from "@mdx-js/react"

const Preview = styled.section`
  border: 0.5rem solid ${({ theme }) => theme.colors.ui_300};
  padding: 2rem;
`

const Pre = styled.pre`
  margin: 2rem 0;
  overflow: auto;
  .token:last-of-type {
    padding-right: 2rem;
  }
`

export default function CodeBlock({
  children,
  style = {},
  scope = {},
  ...props
}) {
  console.log(children)
  const language = children?.props?.className.replace(/language-/, "") || "jsx"
  const code = children?.props?.children.trim()
  const live = children?.props?.live
  return (
    <LiveProvider code={code} scope={{ ...scope, mdx }}>
      {live && (
        <Preview>
          <LiveError />
          <LivePreview />
        </Preview>
      )}
      <Highlight
        {...props}
        Prism={Prism}
        code={code}
        language={language}
        theme={theme}
      >
        {({
          className,
          style: highlightStyle,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <Pre
            className={className}
            style={{
              ...highlightStyle,
              ...style,
              padding: "2rem",
              marginTop: live ? 0 : "2rem",
            }}
          >
            {tokens.map((line, key) => (
              <div key={key} {...getLineProps({ line, key })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </LiveProvider>
  )
}
