import React from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { Feed } from '../components/Feed';
import { JobSearch } from '../components/JobSearch';
import { Games } from '../components/Games';

export function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-3 space-y-4">
        <ProfileCard />
        <Games />
      </div>
      <div className="md:col-span-6">
        <Feed />
      </div>
      <div className="md:col-span-3">
        <JobSearch />
      </div>
    </div>
  );
}