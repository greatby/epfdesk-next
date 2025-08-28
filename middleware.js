// // middleware.js
// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "8.8.8.8";

//   try {
//     const res = await fetch(`https://ipapi.co/${ip}/json/`);
//     const data = await res.json();

//     const response = NextResponse.next();

//     // Save to cookies
//     response.cookies.set("userCountry", data.country_name || "Unknown");
//     response.cookies.set("userCity", data.city || "Unknown");

//     return response;
//   } catch (err) {
//     console.error("❌ IP lookup failed:", err.message);
//     return NextResponse.next();
//   }
// }


// middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Get user IP (fallback to Google DNS when testing locally)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] || "8.8.8.8";

  try {
    // Use ipapi.co to get city/country
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    const response = NextResponse.next();

    // Save city & country in cookies
    response.cookies.set("userCountry", data.country_name || "Unknown Country", {
      path: "/",
    });
    response.cookies.set("userCity", data.city || "Unknown City", {
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("IP lookup failed:", err);
    return NextResponse.next();
  }
}
