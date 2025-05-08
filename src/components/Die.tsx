import React from 'react';

interface DieProps {
  value: number;
  isRolling: boolean;
}

const Die: React.FC<DieProps> = ({ value, isRolling }) => {
  // Function to generate dots based on die value
  const renderDots = () => {
    switch (value) {
      case 1:
        return (
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
          </div>
        );
      case 2:
        return (
          <div className="absolute inset-0 grid grid-cols-2 p-3 md:p-4">
            <div className="flex justify-start items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="flex justify-end items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-3 md:p-4">
            <div className="col-start-1 row-start-1 flex justify-start items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-2 row-start-2 flex justify-center items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-3 row-start-3 flex justify-end items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-3 md:p-4">
            <div className="flex justify-start items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="flex justify-end items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="flex justify-start items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="flex justify-end items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-3 md:p-4">
            <div className="col-start-1 row-start-1 flex justify-start items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-3 row-start-1 flex justify-end items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-2 row-start-2 flex justify-center items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-1 row-start-3 flex justify-start items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-3 row-start-3 flex justify-end items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-3 md:p-4">
            <div className="col-start-1 row-start-1 flex justify-start items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-1 row-start-2 flex justify-start items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-1 row-start-3 flex justify-start items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-3 row-start-1 flex justify-end items-start">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-3 row-start-2 flex justify-end items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
            <div className="col-start-3 row-start-3 flex justify-end items-end">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-slate-900"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`w-16 h-16 md:w-24 md:h-24 bg-white dark:bg-white rounded-lg shadow-lg relative
        ${isRolling ? 'animate-bounce' : 'transform transition-transform duration-500'}
      `}
      style={{
        transformStyle: 'preserve-3d',
        animation: isRolling ? 'roll 0.5s ease-out' : 'none',
      }}
    >
      {renderDots()}
    </div>
  );
};

export default Die;