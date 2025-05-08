import React from 'react';
import { useDice } from '../context/DiceContext';

const RollHistory: React.FC = () => {
  const { rollHistory, diceCount } = useDice();
  
  if (rollHistory.length === 0) {
    return (
      <div className="w-full max-w-md p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg shadow text-center">
        <p className="text-slate-500 dark:text-slate-400 italic">No rolls yet. Roll the dice to start!</p>
      </div>
    );
  }

  // Format time to display in a readable format
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-200">Roll History</h2>
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg shadow-md overflow-hidden">
        <div className="max-h-60 overflow-y-auto">
          <table className="w-full">
            <thead className="bg-slate-100 dark:bg-slate-700 sticky top-0">
              <tr>
                <th className="py-2 px-4 text-left text-slate-700 dark:text-slate-300 font-medium">#</th>
                <th className="py-2 px-4 text-left text-slate-700 dark:text-slate-300 font-medium">Result</th>
                <th className="py-2 px-4 text-left text-slate-700 dark:text-slate-300 font-medium">Total</th>
                <th className="py-2 px-4 text-left text-slate-700 dark:text-slate-300 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {rollHistory.map((roll, index) => (
                <tr 
                  key={roll.id}
                  className={`border-b border-slate-200 dark:border-slate-700 
                    ${index === 0 ? 'bg-emerald-50 dark:bg-emerald-900/20' : ''}
                    hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-150`}
                >
                  <td className="py-2 px-4 text-slate-600 dark:text-slate-300">
                    {rollHistory.length - index}
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-1">
                      <span className="w-6 h-6 inline-flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded font-medium text-slate-800 dark:text-slate-200">
                        {roll.values.dice1}
                      </span>
                      {roll.diceCount === 2 && (
                        <>
                          <span className="text-slate-400">+</span>
                          <span className="w-6 h-6 inline-flex items-center justify-center bg-slate-200 dark:bg-slate-700 rounded font-medium text-slate-800 dark:text-slate-200">
                            {roll.values.dice2}
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="py-2 px-4 font-medium text-emerald-600 dark:text-emerald-400">
                    {roll.total}
                  </td>
                  <td className="py-2 px-4 text-slate-500 dark:text-slate-400 text-sm">
                    {formatTime(roll.timestamp)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RollHistory;