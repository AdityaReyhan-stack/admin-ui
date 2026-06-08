import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "./latihan/pages/SignIn";
import SignUpPage from "./latihan/pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
