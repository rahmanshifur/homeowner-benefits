import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import Layout from "../components/layout";
import ThanhYouPage from "../pages/thank-you";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThanhYouPage />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
