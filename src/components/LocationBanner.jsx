"use client";
import useUserLocation from "@/hooks/useUserLocation";

export default function LocationBanner() {
  const { country, city, lat, lng } = useUserLocation();

  return (
    <div className="p-4 bg-green-100 text-center text-gray-800">
      {country ? (
        <p>
          🌍 You’re visiting from{" "}
          <strong>{city || "Unknown City"}</strong>,{" "}
          <strong>{country}</strong>
          {lat && lng && (
            <span>
              {" "}
              (Lat: {Number(lat).toFixed(2)}, Lng: {Number(lng).toFixed(2)})
            </span>
          )}
        </p>
      ) : (
        <p>Detecting your location...</p>
      )}
    </div>
  );
}
