import React, { useState } from 'react';
import { Gamepad2 } from 'lucide-react';

const games = [
  {
    id: 1,
    name: 'Word Master',
    description: 'Test your vocabulary and typing speed',
    players: 2345,
    url: 'https://playtictactoe.org/'  // Changed to a reliable game site
  },
  {
    id: 2,
    name: 'Code Puzzle',
    description: 'Solve coding challenges',
    players: 1892,
    url: 'https://sudoku.com/'  // Changed to a reliable game site
  }
];

export function Games() {
  const [activeGame, setActiveGame] = useState<number | null>(null);

  const handlePlayGame = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4">
        <Gamepad2 className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-lg font-semibold">LinkedIn Games</h2>
      </div>
      
      <div className="space-y-4">
        {games.map(game => (
          <div 
            key={game.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setActiveGame(game.id)}
          >
            <h3 className="font-semibold">{game.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{game.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              {game.players} players online
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handlePlayGame(game.url);
              }}
              className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Play Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}