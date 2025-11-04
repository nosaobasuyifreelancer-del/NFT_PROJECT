import { Route, Routes } from "react-router";
import NFTDetailsPage from "./nft_details-page";

export const NFTDetailsRoutes = () => {
  return (
    <Routes>
      <Route path=":id" element={<NFTDetailsPage />} />
    </Routes>
  );
};
