import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, X } from 'lucide-react';

interface DriverPanelProps {
  rideType: string | null;
  onCancel: () => void;
}

export default function DriverPanel({ rideType, onCancel }: DriverPanelProps) {
  const [eta, setEta] = useState(5);
  const [driverLocation, setDriverLocation] = useState<[number, number]>([90.3910, 23.8103]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => Math.max(0, prev - 1));
      // Simulate driver movement
      setDriverLocation((prev) => [
        prev[0] + 0.0001,
        prev[1] + 0.0001
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-3xl shadow-lg">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">রিকশা আসছে</h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&auto=format"
            alt="Driver"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-lg">কামাল হোসেন</h3>
              <div className="flex items-center text-yellow-500">
                <Star size={16} fill="currentColor" />
                <span className="ml-1">4.8</span>
              </div>
            </div>
            <p className="text-gray-600">
              {rideType === 'premium' ? 'প্রিমিয়াম রিকশা' : 'সাধারণ রিকশা'} · DH-52-1234
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{eta} মিনিট</p>
            <p className="text-gray-600">আনুমানিক সময়</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white p-3 rounded-xl hover:bg-green-700">
            <Phone size={20} />
            <span>কল করুন</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-800 p-3 rounded-xl hover:bg-gray-200">
            <MessageCircle size={20} />
            <span>মেসেজ</span>
          </button>
        </div>
      </div>
    </div>
  );
}