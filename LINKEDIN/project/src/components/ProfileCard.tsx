import React from 'react';
import { MapPin, Briefcase, Link as LinkIcon } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-lg"></div>
      <div className="px-4 py-4">
        <div className="flex items-center -mt-12">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png"
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 border-white object-cover bg-black"
          />
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-bold">K. Shanmukh</h2>
          <p className="text-gray-600">Cybersecurity Enthusiast</p>
          <div className="flex items-center mt-2 text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Bhimavaram</span>
          </div>
          <div className="flex items-center mt-2 text-gray-600">
            <Briefcase className="h-4 w-4 mr-1" />
            <span>Open to work</span>
          </div>
          <div className="mt-4 flex space-x-2">
            <button 
              onClick={() => alert('Connection request sent!')}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition-colors"
            >
              Connect
            </button>
            <button 
              onClick={() => alert('Opening message composer...')}
              className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition-colors"
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}