import Header from "./components/ui/Header"
import CountryListPage from "./pages/CountryList"
import WishedListPage from "./pages/WishedList"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <div className="md:h-screen lg:flex flex-wrap flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<CountryListPage />} />
        <Route path="/wished-countries" element={<WishedListPage />} />
      </Routes>
    </div>
  )
}

export default App
