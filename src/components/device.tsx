import { useEffect } from "react"
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion"
import Box from "@components/box"

function Device({ src, ...props }: any) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useTransform(mouseX, [200, 1200], [-10, 10])
  const y = useTransform(mouseY, [200, 800], [5, -5])
  function handleMouseMove({ clientX, clientY }) {
    mouseX.set(clientX)
    mouseY.set(clientY)
  }
  useEffect(() => {
    document.body.addEventListener("mousemove", handleMouseMove)
    return () => document.body.removeEventListener("mousemove", handleMouseMove)
  }, [])
  return (
    <Box
      {...props}
      as={motion.figure}
      initial={{ scale: 0.8 }}
      style={{
        rotateX: y,
        rotateY: x,
      }}
      sx={{
        position: "relative",
        borderRadius: "1rem",
        bg: "accent",
        paddingTop: "180%",
        height: 0,
        width: "100%",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        boxShadow: "0 24px 24px -24px rgba(0,0,0,0.24)",
      }}
    >
      <Box
        as="iframe"
        frameBorder="0"
        src={src}
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  )
}

export default Device
