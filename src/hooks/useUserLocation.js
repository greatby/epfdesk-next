"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useUserLocation() {
  const [location, setLocation] = useState({
    country: null,
    city: null,
    lat: null,
    lng: null,
  });

  useEffect(() => {
    // Read from cookies after hydration
    const country = Cookies.get("userCountry");
    const city = Cookies.get("userCity");
    const lat = Cookies.get("userLat");
    const lng = Cookies.get("userLng");

    if (country || city || lat || lng) {
      setLocation({ country, city, lat, lng });
    }

    // Enhance accuracy with browser geolocation
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newLat = pos.coords.latitude;
          const newLng = pos.coords.longitude;
          setLocation((prev) => ({
            ...prev,
            lat: newLat,
            lng: newLng,
          }));
          Cookies.set("userLat", newLat, { expires: 7 });
          Cookies.set("userLng", newLng, { expires: 7 });
        },
        (err) => {
          console.warn("Geolocation error:", err.message);
        }
      );
    }
  }, []);

  return location;
}
