import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { SignUp } from "./pages/SignUp";
import { TeamPage } from "./pages/TeamPage";

export function AppRoutes({ user }) {
  //Boolean(user)
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />

      <Route element={<ProtectedRoute isAllowed={true} />}>
        <Route path="/team" element={<TeamPage />} />
      </Route>
    </Routes>
  );
}
