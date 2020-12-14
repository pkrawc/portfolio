import Highlight, { Prism } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/palenight"
import { LiveProvider, LiveError, LivePreview } from "react-live"
import { mdx } from "@mdx-js/react"
import Box from "@components/box"

export default function CodeBlock({
  children,
  style = {},
  scope = {},
  ...props
}) {
  const language = children.props.className?.replace(/language-/, "") || "jsx"
  const code = children.props.children.trim()
  const live = children.props.live
  return (
    <LiveProvider code={code} scope={{ ...scope, mdx }}>
      {live && (
        <Box
          as="figure"
          sx={{
            p: "2rem",
            borderWidth: "0.5rem",
            borderStyle: "solid",
            borderColor: "accent",
          }}
        >
          <LiveError />
          <LivePreview />
        </Box>
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
          <Box
            as="pre"
            className={className}
            style={{
              ...highlightStyle,
              ...style,
            }}
            sx={{
              p: "2rem",
              mt: live ? 0 : "2rem",
              "& .token:last-of-type": {
                pr: "2rem",
              },
            }}
          >
            {tokens.map((line, key) => (
              <Box key={key} {...getLineProps({ line, key })}>
                {line.map((token, key) => (
                  <Box as="span" key={key} {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </Box>
        )}
      </Highlight>
    </LiveProvider>
  )
}
