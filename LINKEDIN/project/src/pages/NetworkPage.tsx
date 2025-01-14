import React from 'react';
import { UserPlus, Check, X } from 'lucide-react';

const connections = [
  {
    id: 1,
    name: 'Bill Gates',
    role: 'Co-founder of Microsoft',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
    isRequest: true
  },
  {
    id: 2,
    name: 'Larry Page',
    role: 'Co-founder of Google',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg',
    isRequest: true
  },
  {
    id: 3,
    name: 'Steve Jobs',
    role: 'Co-founder of Apple',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/800px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
    isRequest: false,
    mutualConnections: 15
  },
  {
    id: 4,
    name: 'Satya Nadella',
    role: 'CEO of Microsoft',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/800px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg',
    isRequest: false,
    mutualConnections: 23
  },
  {
    id: 5,
    name: 'Mark Zuckerberg',
    role: 'CEO of Meta',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg',
    isRequest: false,
    mutualConnections: 31
  }
];

export function NetworkPage() {
  const [removedRequests, setRemovedRequests] = React.useState<number[]>([]);
  const [acceptedRequests, setAcceptedRequests] = React.useState<number[]>([]);

  const handleAccept = (id: number) => {
    setAcceptedRequests(prev => [...prev, id]);
    // Remove after animation
    setTimeout(() => {
      setRemovedRequests(prev => [...prev, id]);
    }, 500);
  };

  const handleIgnore = (id: number) => {
    setRemovedRequests(prev => [...prev, id]);
  };

  const handleConnect = () => {
    window.open('https://www.linkedin.com/in/shanmukh-k-a361b1253', '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Network</h2>
        </div>
        
        {/* Connection Requests */}
        <div className="p-4 border-b">
          <h3 className="text-lg font-medium mb-4">Pending Requests</h3>
          <div className="space-y-4">
            {connections
              .filter(c => c.isRequest && !removedRequests.includes(c.id))
              .map(connection => (
                <div 
                  key={connection.id} 
                  className={`flex items-center justify-between transform transition-all duration-300 ease-in-out
                    ${acceptedRequests.includes(connection.id) ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
                    hover:bg-gray-50 p-3 rounded-lg`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={connection.imageUrl}
                      alt={connection.name}
                      className="h-12 w-12 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                    <div>
                      <h4 className="font-medium">{connection.name}</h4>
                      <p className="text-sm text-gray-500">{connection.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleAccept(connection.id)}
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleIgnore(connection.id)}
                      className="p-2 border rounded-full hover:bg-gray-50 transform transition-transform duration-300 hover:scale-110 hover:-rotate-3"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Existing Connections */}
        <div className="p-4">
          <h3 className="text-lg font-medium mb-4">People You May Know</h3>
          <div className="grid grid-cols-1 gap-4">
            {connections.filter(c => !c.isRequest).map(connection => (
              <div 
                key={connection.id} 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={connection.imageUrl}
                    alt={connection.name}
                    className="h-12 w-12 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                  <div>
                    <h4 className="font-medium">{connection.name}</h4>
                    <p className="text-sm text-gray-500">{connection.role}</p>
                    <p className="text-sm text-gray-500">{connection.mutualConnections} mutual connections</p>
                  </div>
                </div>
                <button 
                  onClick={handleConnect}
                  className="flex items-center space-x-1 px-4 py-2 border rounded-full hover:bg-blue-50 hover:border-blue-200 transform transition-all duration-300 hover:scale-105 group"
                >
                  <UserPlus className="h-4 w-4 group-hover:text-blue-600" />
                  <span className="group-hover:text-blue-600">Connect</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return <NetworkPage />;
}

export default App;