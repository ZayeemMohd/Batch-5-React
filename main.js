import React from "react"
import ReactDOM from "react-dom/client"


const elem = <h1>React Element</h1>


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(elem)