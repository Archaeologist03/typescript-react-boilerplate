import React from 'react';
import './App.scss';

import Logo from './components/Logo/Logo';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header' />
      <Logo />
    </div>
  );
};

export default App;
