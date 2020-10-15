import Box from "./box"

const Container = ({ sx = {}, ...props }) => (
  <Box {...props} sx={{ maxWidth: "60rem", px: "2rem", mx: "auto", ...sx }} />
)

export default Container
