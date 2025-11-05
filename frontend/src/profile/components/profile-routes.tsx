import { Route, Routes } from "react-router";
import ProfilePage from "./profile-page";

export const ProfileRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<ProfilePage />} />
    </Routes>
  );
};
