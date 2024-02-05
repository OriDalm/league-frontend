import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RootCmp } from "./RootCmp.jsx"
import { store } from "./store/store.js"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <RootCmp />
    </BrowserRouter>
  </Provider>
)
