import { Navigate, Route, Routes } from "react-router";
import RootLayout from "./root-layout";
import HomeRoutes from "@/home";

function MainRoutes() {
  return (
    <RootLayout>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />

        <Route path="home/*" element={<HomeRoutes />} />
      </Routes>
    </RootLayout>
  );
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainRoutes />} />
    </Routes>
  );
};
