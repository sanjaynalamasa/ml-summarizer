import React from 'react';
import { Star, Users } from 'lucide-react';

const SocialProof = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
            <Users className="h-12 w-12 text-indigo-400" />
            <p className="mt-4 text-xl font-semibold text-white">000K+ Satisfied Users</p>
            <p className="mt-2 text-gray-300">Just Now Only Growing community of ML enthusiasts</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
            <Star className="h-12 w-12 text-indigo-400" />
            <p className="mt-4 text-xl font-semibold text-white">0.00 Rating</p>
            <p className="mt-2 text-gray-300">0,000+ verified reviews</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-800"
                  src={`https://picsum.photos/200/300${i}`}
                  alt={`User ${i}`}
                />
              ))}
            </div>
            <p className="mt-4 text-xl font-semibold text-white">Active Community</p>
            <p className="mt-2 text-gray-300">Join of developers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;