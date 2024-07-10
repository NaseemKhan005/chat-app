import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AuthPage from "./pages/auth/authPage";
import HomePage from "./pages/home/homePage";
import StatusPage from "./pages/auth/status/statusPage";
import RootLayout from "./layouts/rootLayout";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/status" element={<StatusPage />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/auth">
          <Route path="sign-in" element={<AuthPage />} />
          <Route path="sign-up" element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
