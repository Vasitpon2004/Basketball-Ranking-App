import React from 'react';
import { useAuth } from './context/AuthContext';
import LoginPage from './features/auth/pages/loginPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';

function App() {
  const { currentUser } = useAuth();

  return currentUser ? <DashboardPage /> : <LoginPage />;
}

export default App;
