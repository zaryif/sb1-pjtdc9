import React, { createContext, useContext, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// Replace with a valid token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNreTBrZHBkdjBhMzMyd3BwM3l0ZXg1Z2EifQ.ph2qMuqE_5gk2W3ZWZwqsw';

interface MapContextType {
  pickup: [number, number] | null;
  dropoff: [number, number] | null;
  setPickup: (coords: [number, number] | null) => void;
  setDropoff: (coords: [number, number] | null) => void;
  mapRef: React.RefObject<mapboxgl.Map | null>;
}

const MapContext = createContext<MapContextType | null>(null);

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [pickup, setPickup] = useState<[number, number] | null>(null);
  const [dropoff, setDropoff] = useState<[number, number] | null>(null);
  const mapRef = React.useRef<mapboxgl.Map | null>(null);

  return (
    <MapContext.Provider value={{
      pickup,
      dropoff,
      setPickup,
      setDropoff,
      mapRef
    }}>
      {children}
    </MapContext.Provider>
  );
}

export function useMap() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMap must be used within a MapProvider');
  }
  return context;
}