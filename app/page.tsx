import React from 'react';
import { CardWithForm } from '../components/card-with-form';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold mb-4">My Awesome App</h1>
      <h2 className="text-2xl font-semibold mb-6">Welcome to the Demo Page</h2>
      <CardWithForm />
    </div>
  );
}
