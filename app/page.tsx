'use client';

import React from 'react';
import { Textarea } from '../components/ui/textarea';
import { Charts } from '../components/charts-01';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold mb-4 text-chart-1">My Awesome App</h1>
      <h2 className="text-2xl font-semibold mb-6 text-chart-2">Welcome to the Demo Page</h2>
      <div className="w-full max-w-md">
        <Textarea placeholder="Type your message here" />
      </div>
      <div className="w-full max-w-4xl">
        <Charts />
      </div>
    </div>
  );
}
