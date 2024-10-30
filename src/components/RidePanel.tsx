import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';

interface RidePanelProps {
  onBack: () => void;
  onConfirm: (rideType: string) => void;
}

export default function RidePanel({ onBack, onConfirm }: RidePanelProps) {
  const rides = [
    {
      id: 'standard',
      name: 'সাধারণ রিকশা',
      time: '8-12',
      price: '৳60-80',
      image: 'https://images.unsplash.com/photo-1533632359083-0185df1be85d?w=120&h=80&fit=crop&auto=format'
    },
    {
      id: 'premium',
      name: 'প্রিমিয়াম রিকশা',
      time: '5-8',
      price: '৳80-100',
      image: 'https://images.unsplash.com/photo-1464766025488-0b53a41fa9dd?w=120&h=80&fit=crop&auto=format'
    },
    {
      id: 'electric',
      name: 'ইলেকট্রিক রিকশা',
      time: '6-10',
      price: '৳70-90',
      image: 'https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?w=120&h=80&fit=crop&auto=format'
    }
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-lg p-6 space-y-4">
      <div className="flex items-center">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-semibold ml-2">উপলব্ধ রিকশা</h2>
      </div>

      <div className="space-y-3">
        {rides.map((ride) => (
          <div
            key={ride.id}
            onClick={() => onConfirm(ride.id)}
            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 cursor-pointer border border-gray-100 transition-all duration-200 hover:border-green-500"
          >
            <img
              src={ride.image}
              alt={ride.name}
              className="w-20 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-medium text-lg">{ride.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {ride.time} mins
                </div>
                <div className="font-medium text-green-600">{ride.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}