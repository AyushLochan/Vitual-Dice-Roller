import React from 'react';
import { Volume2, VolumeX, Dice1 as Dice, RotateCcw } from 'lucide-react';
import { useDice } from '../context/DiceContext';

const Controls: React.FC = () => {
  const { 
    rollDice, 
    isRolling, 
    diceCount, 
    toggleDiceCount, 
    soundEnabled, 
    toggleSound,
    clearHistory
  } = useDice();

  return (
    <div className="w-full max-w-md flex flex-col gap-4 mb-8">
      <button
        onClick={rollDice}
        disabled={isRolling}
        className={`
          bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg
          shadow-md transition-all duration-300 transform
          ${isRolling ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
          flex items-center justify-center gap-2
        `}
      >
        <Dice className="w-5 h-5" />
        <span className="text-lg">Roll {diceCount === 1 ? 'Die' : 'Dice'}</span>
      </button>
      
      <div className="flex gap-2 justify-center">
        <button
          onClick={toggleDiceCount}
          disabled={isRolling}
          className={`
            bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600
            text-slate-800 dark:text-slate-200 font-medium py-2 px-4 rounded-lg
            shadow-sm transition-all duration-200 flex items-center justify-center gap-2
            ${isRolling ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-md'}
          `}
        >
          <span>{diceCount === 1 ? '1 Die' : '2 Dice'}</span>
        </button>
        
        <button
          onClick={toggleSound}
          className={`
            bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600
            text-slate-800 dark:text-slate-200 font-medium py-2 px-4 rounded-lg
            shadow-sm transition-all duration-200 flex items-center justify-center
            hover:shadow-md
          `}
        >
          {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
        
        <button
          onClick={clearHistory}
          className={`
            bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600
            text-slate-800 dark:text-slate-200 font-medium py-2 px-4 rounded-lg
            shadow-sm transition-all duration-200 flex items-center justify-center
            hover:shadow-md
          `}
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Controls;