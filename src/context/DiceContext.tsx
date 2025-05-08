import React, { createContext, useContext, useState, useEffect } from 'react';

type DiceValues = {
  dice1: number;
  dice2: number;
};

type RollHistoryItem = {
  id: string;
  values: DiceValues;
  total: number;
  timestamp: Date;
  diceCount: 1 | 2;
};

type DiceContextType = {
  diceValues: DiceValues;
  isRolling: boolean;
  diceCount: 1 | 2;
  soundEnabled: boolean;
  rollHistory: RollHistoryItem[];
  toggleDiceCount: () => void;
  toggleSound: () => void;
  rollDice: () => void;
  clearHistory: () => void;
};

const defaultDiceValues = { dice1: 6, dice2: 6 };

const DiceContext = createContext<DiceContextType | undefined>(undefined);

export const DiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [diceValues, setDiceValues] = useState<DiceValues>(defaultDiceValues);
  const [isRolling, setIsRolling] = useState(false);
  const [diceCount, setDiceCount] = useState<1 | 2>(2);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [rollHistory, setRollHistory] = useState<RollHistoryItem[]>([]);

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedDiceCount = localStorage.getItem('diceCount');
    const savedSoundEnabled = localStorage.getItem('soundEnabled');
    
    if (savedDiceCount) {
      setDiceCount(parseInt(savedDiceCount) as 1 | 2);
    }
    
    if (savedSoundEnabled) {
      setSoundEnabled(savedSoundEnabled === 'true');
    }
    
    const savedHistory = localStorage.getItem('rollHistory');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        // Convert string timestamps back to Date objects
        const formattedHistory = parsed.map((item: any) => ({
          ...item,
          timestamp: new Date(item.timestamp)
        }));
        setRollHistory(formattedHistory);
      } catch (e) {
        console.error('Failed to parse roll history', e);
      }
    }
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('diceCount', diceCount.toString());
    localStorage.setItem('soundEnabled', soundEnabled.toString());
    
    // Save only the last 10 rolls to avoid excessive storage
    const historyToSave = rollHistory.slice(0, 10);
    localStorage.setItem('rollHistory', JSON.stringify(historyToSave));
  }, [diceCount, soundEnabled, rollHistory]);

  const rollDice = () => {
    if (isRolling) return;
    
    setIsRolling(true);
    
    // Play sound if enabled
    if (soundEnabled) {
      const audio = new Audio('/dice-roll.mp3');
      audio.play().catch(err => console.error('Error playing sound:', err));
    }
    
    // Simulate dice animation by changing values rapidly
    let times = 0;
    const maxTimes = 10;
    const interval = setInterval(() => {
      setDiceValues({
        dice1: Math.floor(Math.random() * 6) + 1,
        dice2: Math.floor(Math.random() * 6) + 1
      });
      
      times++;
      if (times >= maxTimes) {
        clearInterval(interval);
        
        // Final dice values
        const finalValues = {
          dice1: Math.floor(Math.random() * 6) + 1,
          dice2: Math.floor(Math.random() * 6) + 1
        };
        
        setDiceValues(finalValues);
        
        // Add to roll history
        const newRoll: RollHistoryItem = {
          id: Date.now().toString(),
          values: finalValues,
          total: finalValues.dice1 + (diceCount === 2 ? finalValues.dice2 : 0),
          timestamp: new Date(),
          diceCount
        };
        
        setRollHistory(prev => [newRoll, ...prev]);
        
        setTimeout(() => {
          setIsRolling(false);
        }, 500);
      }
    }, 100);
  };

  const toggleDiceCount = () => {
    setDiceCount(prev => (prev === 1 ? 2 : 1));
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  const clearHistory = () => {
    setRollHistory([]);
    localStorage.removeItem('rollHistory');
  };

  return (
    <DiceContext.Provider
      value={{
        diceValues,
        isRolling,
        diceCount,
        soundEnabled,
        rollHistory,
        rollDice,
        toggleDiceCount,
        toggleSound,
        clearHistory
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export const useDice = () => {
  const context = useContext(DiceContext);
  if (context === undefined) {
    throw new Error('useDice must be used within a DiceProvider');
  }
  return context;
};