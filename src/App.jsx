import { BrowserRouter } from "react-router-dom"
import { routes } from "./router/routes"
import GlobalStyles from "../styles/GlobalStyles"

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
      { routes() }
    </BrowserRouter>
  )
}

export default App
