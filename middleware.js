import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "Unknown";
  const city = req.geo?.city || "Unknown";

  const res = NextResponse.next();
  res.cookies.set("userCountry", country);
  res.cookies.set("userCity", city);
  return res;
}
