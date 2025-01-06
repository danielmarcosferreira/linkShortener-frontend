import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ApresentationPage from "./pages/ApresentationPage";
import HomePage from "./pages/HomePage";
import { GlobalStyles } from "./styles/GlobalStyle";
import Header from "./components/Header";
import HeaderLoggedIn from "./components/HeaderLoggedIn";
import RankingPage from "./pages/RankingPage";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<ApresentationPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <>
              <HeaderLoggedIn />
              <HomePage />
            </>
          }
        />
        <Route
          path="/ranking"
          element={
            <>
              <HeaderLoggedIn />
              <RankingPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

function ConditionalHeader() {
  const location = useLocation();

  const excludedRoutes = ["/home", "/ranking"];
  if (excludedRoutes.includes(location.pathname)) {
    return null;
  }

  return <Header />;
}

export default App;