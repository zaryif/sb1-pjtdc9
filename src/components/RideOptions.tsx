import React from 'react';
import { Clock, Bike } from 'lucide-react';

interface RideOptionsProps {
  onSelect: (ride: string) => void;
}

export default function RideOptions({ onSelect }: RideOptionsProps) {
  const rides = [
    {
      id: 'standard',
      name: 'Standard Rickshaw',
      time: '5-10',
      price: '৳60-80',
      image: 'https://images.unsplash.com/photo-1566376799975-ad0a084926fa?w=120&h=80&fit=crop&auto=format'
    },
    {
      id: 'premium',
      name: 'Premium Rickshaw',
      time: '5-10',
      price: '৳80-100',
      image: 'https://images.unsplash.com/photo-1624483047313-49e16a4f8e61?w=120&h=80&fit=crop&auto=format'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Available Rides</h2>
      <div className="space-y-3">
        {rides.map((ride) => (
          <div
            key={ride.id}
            onClick={() => onSelect(ride.id)}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <img
                src={ride.image}
                alt={ride.name}
                className="w-20 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{ride.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {ride.time} mins
                  </div>
                  <div className="font-medium text-green-600">{ride.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}