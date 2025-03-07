import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/custom/Layout";
import Home from "./pages/Home";
import CreateTour from "./pages/CreateTour";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-tour" element={<CreateTour />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
