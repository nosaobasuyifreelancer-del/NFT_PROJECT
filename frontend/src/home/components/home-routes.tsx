import { Route, Routes } from "react-router";
import HomePage from "./home-page";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
};
