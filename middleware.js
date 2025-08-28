import { NextResponse } from "next/server";

export async function middleware(req) {
  let country = req.geo?.country || null;
  let city = req.geo?.city || null;

  // fallback if req.geo is missing
  if (!country || !city) {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.ip ||
      "8.8.8.8";

    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await res.json();

      country = data.country_name || "Unknown";
      city = data.city || "Unknown";
    } catch (e) {
      console.error("IP lookup failed", e);
    }
  }

  const response = NextResponse.next();
  response.cookies.set("userCountry", country || "Unknown");
  response.cookies.set("userCity", city || "Unknown");

  return response;
}

export const config = {
  matcher: ["/:path*"], // run on all routes
};
