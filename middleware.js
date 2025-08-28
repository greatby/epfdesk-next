import { NextResponse } from "next/server";

export const config = {
  matcher: ["/"], // or all routes if needed
  runtime: "edge", // 👈 force edge runtime
};

export function middleware(req) {
  const country = req.geo?.country || "Unknown";
  const city = req.geo?.city || "Unknown";

  const res = NextResponse.next();
  res.cookies.set("userCountry", country);
  res.cookies.set("userCity", city);
  return res;
}
