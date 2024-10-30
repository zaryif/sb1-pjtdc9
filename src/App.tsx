import React, { useState } from 'react';
import Map from './components/Map';
import SearchOverlay from './components/SearchOverlay';
import RidePanel from './components/RidePanel';
import DriverPanel from './components/DriverPanel';
import { MapProvider } from './contexts/MapContext';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [bookingState, setBookingState] = useState<'search' | 'selecting' | 'confirmed'>('search');
  const [selectedRide, setSelectedRide] = useState<string | null>(null);

  return (
    <MapProvider>
      <div className="h-screen w-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Map />
        </div>
        
        {bookingState === 'search' && (
          <SearchOverlay 
            onLocationSelect={() => setBookingState('selecting')}
          />
        )}

        {bookingState === 'selecting' && (
          <RidePanel
            onBack={() => setBookingState('search')}
            onConfirm={(rideType) => {
              setSelectedRide(rideType);
              setBookingState('confirmed');
            }}
          />
        )}

        {bookingState === 'confirmed' && (
          <DriverPanel
            rideType={selectedRide}
            onCancel={() => {
              setSelectedRide(null);
              setBookingState('search');
            }}
          />
        )}
      </div>
    </MapProvider>
  );
}

export default App;