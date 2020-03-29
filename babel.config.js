module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { ssr: true }][
      ("module-resolver",
      {
        alias: {
          components: "./components",
          constants: "./constants.js"
        }
      })
    ]
  ]
}
