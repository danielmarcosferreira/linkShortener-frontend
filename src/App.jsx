import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/ApresentationPage"
import Signup from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
