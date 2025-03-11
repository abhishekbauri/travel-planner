import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/custom/Layout";
import Home from "./pages/Home";
import CreateTour from "./pages/CreateTour";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import ViewTrip from "./pages/ViewTrip";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-tour" element={<CreateTour />} />

            <Route
              path="/view-trip-details/:userid"
              element={
                <ProtectedRoute>
                  <ViewTrip />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
