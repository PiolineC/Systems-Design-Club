import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: ReactNode;
  description: string;
}

export default function ValueCard({ icon, title, description }: CardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-left ring-1 ring-indigo-400">
      <div className="flex items-center space-x-3 mb-4 text-indigo-400">
        <div className="h-10 w-10 ">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}