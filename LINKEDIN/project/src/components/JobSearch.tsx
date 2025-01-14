import React from 'react';
import { Search, MapPin, Building2 } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Cybersecurity Analyst',
    company: 'Google',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120,000 - $180,000'
  },
  {
    id: 2,
    title: 'Security Engineer',
    company: 'Microsoft',
    location: 'Hyderabad, India',
    type: 'Full-time',
    salary: '₹25,00,000 - ₹45,00,000'
  }
];

export function JobSearch() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <div className="flex items-center text-gray-600 mt-2">
              <Building2 className="h-4 w-4 mr-1" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-sm text-gray-500">{job.type}</span>
              <span className="text-sm font-medium text-gray-700">{job.salary}</span>
            </div>
            <button className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}