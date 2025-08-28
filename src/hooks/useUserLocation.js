"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useUserLocation() {
  const [location, setLocation] = useState({ country: null, city: null });

  useEffect(() => {
    const country = Cookies.get("userCountry");
    const city = Cookies.get("userCity");

    if (country || city) {
      setLocation({ country, city });
    }
  }, []);

  return location;
}
