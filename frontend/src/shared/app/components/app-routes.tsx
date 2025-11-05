import { Navigate, Route, Routes } from "react-router";
import RootLayout from "./root-layout";
import HomeRoutes from "@/home";
import NFTDetailsRoutes from "@/nft-details";
import ProfileRoutes from "@/profile";

function MainRoutes() {
  return (
    <RootLayout>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />

        <Route path="home/*" element={<HomeRoutes />} />
        <Route path="profile/*" element={<ProfileRoutes />} />
        <Route path="collection/nft_details/*" element={<NFTDetailsRoutes />} />
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
