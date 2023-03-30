import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashBoardPage';
import { userTypeMap } from './people/usertypes';



const App = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (selectedUserType) => {
    const newUserType = userTypeMap[selectedUserType];
    setUserType(newUserType);
  };

  const handleLogout = () => {
    setUserType(null);
  };

  if (!userType) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <DashboardPage userType={userType} onLogout={handleLogout} />;
}

export default App;