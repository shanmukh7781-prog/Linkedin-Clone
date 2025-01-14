import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, Users, MessageSquare, Bell, Briefcase, Search, Menu } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState([
    { id: 1, text: "Bill Gates sent you a connection request", isRequest: true },
    { id: 2, text: "Larry Page wants to connect with you", isRequest: true },
    { id: 3, text: "Jensen Huang viewed your profile", isRequest: false },
    { id: 4, text: "New job matches in your area", isRequest: false }
  ]);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [showJobs, setShowJobs] = React.useState(false);

  const jobs = [
    {
      id: 1,
      title: "Senior Cybersecurity Engineer",
      company: "Microsoft",
      location: "Hyderabad, India",
      salary: "₹40,00,000 - ₹60,00,000"
    },
    {
      id: 2,
      title: "AI Research Scientist",
      company: "Google",
      location: "Bangalore, India",
      salary: "₹50,00,000 - ₹70,00,000"
    },
    {
      id: 3,
      title: "Cloud Security Architect",
      company: "Amazon",
      location: "Remote",
      salary: "₹45,00,000 - ₹65,00,000"
    }
  ];

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { 
      name: 'Network', 
      href: '/network', 
      icon: Users
    },
    { 
      name: 'Jobs', 
      href: '/jobs', 
      icon: Briefcase,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setShowJobs(!showJobs);
        setShowNotifications(false);
        setIsMobileMenuOpen(false);
      }
    },
    { name: 'Messages', href: '/messages', icon: MessageSquare },
    { 
      name: 'Notifications', 
      href: '/notifications', 
      icon: Bell,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setShowNotifications(!showNotifications);
        setShowJobs(false);
        setIsMobileMenuOpen(false);
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                />
              </Link>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={item.onClick}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        location.pathname === item.href
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-1" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="md:hidden p-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications dropdown */}
        {showNotifications && (
          <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">Notifications</h3>
              {notifications.map(notification => (
                <div key={notification.id} className="p-3 hover:bg-gray-50 rounded cursor-pointer border-b">
                  <p>{notification.text}</p>
                  {notification.isRequest && (
                    <div className="mt-2 flex space-x-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Accept
                      </button>
                      <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
                        Ignore
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Jobs dropdown */}
        {showJobs && (
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-50 border">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3">Recommended Jobs</h3>
              {jobs.map(job => (
                <div key={job.id} className="p-3 hover:bg-gray-50 rounded cursor-pointer border-b">
                  <h4 className="font-medium">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.location}</p>
                  <p className="text-sm text-gray-600 mt-1">{job.salary}</p>
                  <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              ))}
              <button 
                onClick={() => window.open('https://www.linkedin.com/jobs', '_blank', 'noopener,noreferrer')}
                className="mt-3 w-full text-blue-600 hover:text-blue-800 text-sm"
              >
                View all jobs on LinkedIn →
              </button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={item.onClick}
                  className={`flex items-center px-3 py-2 text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}