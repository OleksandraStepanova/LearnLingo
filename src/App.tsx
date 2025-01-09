import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
  const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
  const FavoritesPage = lazy(
    () => import('./pages/FavoritesPage/FavoritesPage')
  );

  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
