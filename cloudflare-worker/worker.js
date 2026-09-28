/**
 * Cloudflare Worker — Proxy for Firebase Hosting
 * 
 * This worker forwards all requests to your Firebase Hosting site,
 * making it accessible publicly without a VPN.
 * 
 * Firebase Hosting URL: https://testing-web-app-2b706.web.app
 * Worker URL (after deploy): https://journey-proxy.<your-subdomain>.workers.dev
 */

const FIREBASE_HOSTNAME = "testing-web-app-2b706.web.app";

export default {
  async fetch(request, env, ctx) {
    // Build the forwarded URL pointing to Firebase Hosting
    const url = new URL(request.url);
    url.hostname = FIREBASE_HOSTNAME;
    url.protocol = "https:";
    url.port = "";

    // Clone and modify headers
    const headers = new Headers(request.headers);
    headers.set("Host", FIREBASE_HOSTNAME);
    headers.set("X-Forwarded-Host", request.headers.get("host") || "");
    headers.delete("cf-connecting-ip"); // Remove Cloudflare-specific headers

    // Forward the request to Firebase Hosting
    const firebaseRequest = new Request(url.toString(), {
      method: request.method,
      headers: headers,
      body: request.method !== "GET" && request.method !== "HEAD"
        ? request.body
        : null,
      redirect: "follow",
    });

    try {
      const response = await fetch(firebaseRequest);

      // Clone response headers and add CORS + cache headers
      const responseHeaders = new Headers(response.headers);
      responseHeaders.set("X-Proxied-By", "Cloudflare-Worker");
      responseHeaders.set("Access-Control-Allow-Origin", "*");
      responseHeaders.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      responseHeaders.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

      // Handle preflight OPTIONS requests
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: responseHeaders,
        });
      }

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to reach Firebase Hosting", details: error.message }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  },
};
