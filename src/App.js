import React from 'react';

import './App.scss';
import Home from './pages';
import Navbar from './components/navbar';
import Toast from './components/toast';
import TutorialModal from './components/tutorial-modal';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Toast />
      <TutorialModal />
    </>
  );
}

export default App;
