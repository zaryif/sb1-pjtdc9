import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMap } from '../contexts/MapContext';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { mapRef, pickup, dropoff } = useMap();
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    try {
      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [90.3910, 23.8103], // Dhaka coordinates
        zoom: 12
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      mapRef.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );

      mapRef.current.on('load', () => {
        mapRef.current?.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: []
            }
          }
        });

        mapRef.current?.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#10B981',
            'line-width': 4,
            'line-dasharray': [2, 1]
          }
        });
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    if (!mapRef.current || !pickup || !dropoff) return;

    try {
      const source = mapRef.current.getSource('route') as mapboxgl.GeoJSONSource;
      
      if (source) {
        source.setData({
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [pickup, dropoff]
          }
        });

        // Add new markers
        const pickupMarker = new mapboxgl.Marker({ color: '#10B981' })
          .setLngLat(pickup)
          .addTo(mapRef.current);

        const dropoffMarker = new mapboxgl.Marker({ color: '#EF4444' })
          .setLngLat(dropoff)
          .addTo(mapRef.current);

        markersRef.current = [pickupMarker, dropoffMarker];

        // Fit bounds to show the entire route
        const bounds = new mapboxgl.LngLatBounds()
          .extend(pickup)
          .extend(dropoff);

        mapRef.current.fitBounds(bounds, {
          padding: 100,
          duration: 1000
        });
      }
    } catch (error) {
      console.error('Error updating route:', error);
    }
  }, [pickup, dropoff]);

  return (
    <div ref={mapContainer} className="w-full h-full">
      {!mapboxgl.supported() && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 p-4">
          <p className="text-red-600 text-center">
            Your browser doesn't support Mapbox GL. Please try a different browser.
          </p>
        </div>
      )}
    </div>
  );
}