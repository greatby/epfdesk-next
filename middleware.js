import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "Unknown";
  const city = req.geo?.city || "Unknown";

  console.log("🌍 Geo detected:", req.geo); // should log in Vercel

  const res = NextResponse.next();
  res.cookies.set("userCountry", country);
  res.cookies.set("userCity", city);

  return res;
}

export const config = {
  matcher: ["/:path*"],
};
