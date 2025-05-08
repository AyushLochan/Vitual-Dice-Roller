import React, { useState } from 'react';
import DiceContainer from './components/DiceContainer';
import Header from './components/Header';
import Controls from './components/Controls';
import RollHistory from './components/RollHistory';
import { DiceProvider } from './context/DiceContext';

function App() {
  return (
    <DiceProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
          <DiceContainer />
          <Controls />
          <RollHistory />
        </main>
        <footer className="text-center p-4 text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Virtual Dice Roller
        </footer>
      </div>
    </DiceProvider>
  );
}

export default App;