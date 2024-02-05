import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"

export function RootCmp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
