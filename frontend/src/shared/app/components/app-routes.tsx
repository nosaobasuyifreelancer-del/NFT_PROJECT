import { Route, Routes } from "react-router";
import RootLayout from "./root-layout";
import HomeRoutes from "@/home";

function MainRoutes() {
  return (
    <RootLayout>
      <Routes>
        <Route path="home/*" element={<HomeRoutes />} />
        {/* <Route path="tasks/*" element={<TasksRoutes />} /> */}
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
