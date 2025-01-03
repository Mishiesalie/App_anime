import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Watch2gether = () => {
  const { user, setIsLoginModalOpen } = useAuth();
  const [roomId, setRoomId] = useState('');
  const [rooms, setRooms] = useState([]);

  // Simulated room data
  useEffect(() => {
    setRooms([
      { id: 'room1', name: 'One Piece EP 1086', viewers: 42, currentTime: '12:45' },
      { id: 'room2', name: 'Bleach TYBW', viewers: 28, currentTime: '18:30' },
      { id: 'room3', name: 'Attack on Titan', viewers: 156, currentTime: '5:20' },
    ]);
  }, []);

  const createRoom = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    // Implement room creation logic
  };

  const joinRoom = (id) => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    // Implement room joining logic
  };

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Watch2gether</h1>
        <p className="text-gray-400">Watch anime together with friends in real-time!</p>
      </div>

      {/* Create Room Section */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Create Room</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Room name"
            className="flex-1 bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button
            onClick={createRoom}
            className="bg-pink-600 px-6 py-2 rounded-md hover:bg-pink-700 text-white"
          >
            Create Room
          </button>
        </div>
      </div>

      {/* Active Rooms */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Active Rooms</h2>
        <div className="grid gap-4">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="text-white font-medium">{room.name}</h3>
                <div className="text-sm text-gray-400">
                  <span>{room.viewers} viewers</span>
                  <span className="mx-2">•</span>
                  <span>Current time: {room.currentTime}</span>
                </div>
              </div>
              <button
                onClick={() => joinRoom(room.id)}
                className="bg-pink-600 px-4 py-2 rounded-md hover:bg-pink-700 text-white"
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch2gether; 