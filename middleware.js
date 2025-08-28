import { NextResponse } from "next/server";

// 👇 This makes sure it runs in Vercel Edge (req.geo available only here)
export const config = {
  matcher: ["/:path*"],
  runtime: "edge",
};

export function middleware(req) {
  const country = req.geo?.country || "Unknown";
  const city = req.geo?.city || "Unknown";

  console.log("Detected Geo:", req.geo); // 👈 check logs in Vercel console

  const res = NextResponse.next();
  res.cookies.set("userCountry", country);
  res.cookies.set("userCity", city);

  return res;
}
