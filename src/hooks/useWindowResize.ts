import { useReducer, useCallback, useEffect } from "react"

type WindowSizeState = {
  width: number
  height: number
}

type WindowSizeAction = {
  payload: WindowSizeState
  type: string
}

function windowSizeReducer(
  state: WindowSizeState,
  action: WindowSizeAction
): WindowSizeState {
  return { ...state, ...action.payload }
}

export default function useWindowSize() {
  const [bounds, dispatch] = useReducer(windowSizeReducer, {
    width: 0,
    height: 0,
  })
  const handleResize = useCallback(() => {
    dispatch({
      type: "RESIZE",
      payload: { height: window.innerHeight, width: window.innerWidth },
    })
  }, [window])
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    dispatch({
      type: "RESIZE",
      payload: { height: window.innerHeight, width: window.innerWidth },
    })
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return bounds
}
