import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { WaitingPage } from './WaitingPage';
import { ContinuationPage } from './ContinuationPage';

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waitingpage" element={<WaitingPage />} />
        <Route path="/continuationpage" element={<ContinuationPage />} />
      </Routes>
    </Suspense>
  );
};
