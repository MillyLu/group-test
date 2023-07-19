import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/protected-route/protected-route';
import { SignUp } from './pages/SignUp';
import { TeamPage } from './pages/TeamPage';
import { PartnerPage } from './pages/PartnerPage';

export function AppRoutes({ user }) {
    return (
        <Routes>
            <Route path="/auth" element={<SignUp />} />

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<TeamPage />} />
                <Route path="/partner/:id" element={<PartnerPage />} />
            </Route>
        </Routes>
    );
}
