import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { WaitingPage } from './WaitingPage';
import { RegistrationContinuationPage } from './RegistrationContinuationPage';

export const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/waitingpage" element={<WaitingPage />} />      
        <Route path="/registrationpage/:id" element={<RegistrationContinuationPage />} /> 
      </Routes>
    </Suspense>
  );
};
