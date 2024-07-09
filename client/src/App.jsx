import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AuthPage from "./pages/auth/authPage";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        {/* Auth Page */}
        <Route path="/auth">
          <Route path="sign-in" element={<AuthPage />} />
          <Route path="sign-up" element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
