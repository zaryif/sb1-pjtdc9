import React, { useState } from 'react';
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';

interface BookingFormProps {
  onBack: () => void;
  selectedRide: string | null;
}

export default function BookingForm({ onBack, selectedRide }: BookingFormProps) {
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    setIsBooked(true);
    // In a real app, this would make an API call to book the ride
  };

  if (isBooked) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <div className="w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Rickshaw Confirmed!</h2>
        <p className="text-gray-600">Your rickshaw is on the way</p>
        
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=80&h=80&fit=crop&auto=format"
              alt="Driver"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-medium">Kamal Hossain</h3>
              <p className="text-gray-500 text-sm">Rating: 4.8 ⭐</p>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center space-x-4">
            <button className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
              <Phone size={18} />
              <span>Call</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
              <MessageCircle size={18} />
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Confirm Your Ride</h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-gray-600">Ride Type</span>
            <span className="font-medium">
              {selectedRide === 'premium' ? 'Premium Rickshaw' : 'Standard Rickshaw'}
            </span>
          </div>

          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-gray-600">Estimated Time</span>
            <span className="font-medium">5-10 mins</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b">
            <span className="text-gray-600">Estimated Fare</span>
            <span className="font-medium">
              {selectedRide === 'premium' ? '৳80-100' : '৳60-80'}
            </span>
          </div>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}