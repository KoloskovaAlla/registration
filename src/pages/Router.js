import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wainting" element={<WaitingPage />} />
        <Route path="/prolongation" element={<ProlongationPage />} />
      </Routes>
    </Suspense>
  );
};
