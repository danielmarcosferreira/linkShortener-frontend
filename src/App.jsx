import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import ApresentationPage from "./pages/ApresentationPage"
import HomePage from "./pages/HomePage"
import { GlobalStyles } from "./styles/GlobalStyle"
import Header from "./components/Header"

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<ApresentationPage />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
