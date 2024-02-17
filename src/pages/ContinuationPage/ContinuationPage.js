import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const ContinuationPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);  
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    sendRegistrationData({ email, password });
    setModalOpen(true);
  };

  const closeModalAndRedirect = () => {
    setModalOpen(false);
    // Перенаправление на главную страницу
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Продолжение регистрации</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Подтвердите пароль:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Завершить регистрацию</button>
      </form>
      
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Вы успешно зарегистрированы!</p>
            <button onClick={closeModalAndRedirect}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};
