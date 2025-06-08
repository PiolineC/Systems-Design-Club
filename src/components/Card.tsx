import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: ReactNode;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-gray-300 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center">
      <div className="h-10 w-10 mb-4 text-indigo-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-indigo-400">{title}</h3>
      <p>{description}</p>
    </div>
  );
}