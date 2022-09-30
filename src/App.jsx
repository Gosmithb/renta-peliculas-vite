import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import { Catalog } from "./pages/Catalog"
import { Home } from "./pages/Home"
import { Recommendations } from "./pages/Recommendations"
import { Popular } from "./pages/Popular"

function App() {

  return (
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/popular" element={<Popular />} />
        </Routes>
    </>
  )
}

export default App
