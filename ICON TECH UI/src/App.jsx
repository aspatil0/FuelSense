import React, { useState } from 'react';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import ModuleSelector from './components/ModuleSelector';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <LoginForm key="login" onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <ModuleSelector key="selector" onContinue={() => alert('Proceeding to dashboard...')} />
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
