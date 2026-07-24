import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import OverviewPage from './pages/OverviewPage';
import AssignmentsPage from './pages/AssignmentsPage';
import EvidencePage from './pages/EvidencePage';
import RubricPage from './pages/RubricPage';
import ReflectionPage from './pages/ReflectionPage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="assignments" element={<AssignmentsPage />} />
        <Route path="evidence" element={<EvidencePage />} />
        <Route path="rubric" element={<RubricPage />} />
        <Route path="reflection" element={<ReflectionPage />} />
      </Route>
    </Routes>
  );
}
