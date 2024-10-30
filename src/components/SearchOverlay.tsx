import React, { useState } from 'react';
import { MapPin, Navigation2 } from 'lucide-react';
import { useMap } from '../contexts/MapContext';

interface SearchOverlayProps {
  onLocationSelect: () => void;
}

export default function SearchOverlay({ onLocationSelect }: SearchOverlayProps) {
  const { setPickup, setDropoff } = useMap();
  const [pickupAddress, setPickupAddress] = useState('');
  const [dropoffAddress, setDropoffAddress] = useState('');

  const handleSearch = () => {
    // In a real app, we would geocode the addresses
    setPickup([90.3910, 23.8103]); // Example coordinates
    setDropoff([90.4125, 23.8103]); // Example coordinates
    onLocationSelect();
  };

  return (
    <div className="absolute top-0 left-0 w-full p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 space-y-4">
        <h1 className="text-2xl font-bold text-green-800 text-center mb-6">
          রিকশা লাগবে?
        </h1>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
            <MapPin className="text-green-600 flex-shrink-0" />
            <input
              type="text"
              placeholder="আপনার অবস্থান"
              className="w-full bg-transparent outline-none"
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
            <Navigation2 className="text-green-600 flex-shrink-0" />
            <input
              type="text"
              placeholder="গন্তব্য"
              className="w-full bg-transparent outline-none"
              value={dropoffAddress}
              onChange={(e) => setDropoffAddress(e.target.value)}
            />
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            রিকশা খুঁজুন
          </button>
        </div>
      </div>
    </div>
  );
}