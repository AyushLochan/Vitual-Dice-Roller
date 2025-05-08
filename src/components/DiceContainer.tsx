import React from 'react';
import Die from './Die';
import { useDice } from '../context/DiceContext';

const DiceContainer: React.FC = () => {
  const { diceValues, diceCount, isRolling } = useDice();

  return (
    <div className="w-full max-w-lg aspect-video flex items-center justify-center p-4 mb-4 relative">
      <div className="relative bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl shadow-inner w-full h-full flex items-center justify-center">
        {/* Dice container with felt-like texture */}
        <div className={`flex items-center justify-center gap-8 transition-all duration-500 ${isRolling ? 'scale-110' : 'scale-100'}`}>
          <div className={`transition-all duration-300 ${diceCount === 1 ? 'scale-125' : 'scale-100'}`}>
            <Die value={diceValues.dice1} isRolling={isRolling} />
          </div>
          
          {diceCount === 2 && (
            <div className="transition-all duration-300">
              <Die value={diceValues.dice2} isRolling={isRolling} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiceContainer;