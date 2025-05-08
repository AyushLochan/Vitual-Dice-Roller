import React from 'react';
import { Dice1 as Dice } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 text-white p-2 rounded-lg">
            <Dice className="w-6 h-6" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
            Virtual Dice Roller
          </h1>
        </div>
        
        <div className="text-sm text-slate-600 dark:text-slate-300 italic">
          Roll the dice!
        </div>
      </div>
    </header>
  );
};

export default Header;