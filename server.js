const express = require("express")
const next = require("next")
const conf = require("./next.config")
const compression = require("compression")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, conf })
const port = process.env.PORT || 8080
const handler = app.getRequestHandler()

const serve = () => {
  const server = express()
  server.use(express.urlencoded({ extended: true }))
  server.use(compression())

  server.get("*", handler)

  server.listen(port, err => {
    if (err) console.error(err)
    if (dev) console.log(`listening on localhost:${port}`)
  })
}

app.prepare().then(serve)
