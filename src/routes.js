import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./protected-route";
import { SignUp } from "./pages/SignUp";
import { TeamPage } from "./pages/TeamPage";

export function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/team" element={<TeamPage />} />
      </Route>
    </Routes>
  );
}
