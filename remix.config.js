/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
  serverDependenciesToBundle: [
    /^@shopify/,
  ],
  // 👇 crucial
  vite: {
    json: {
      stringify: true, // makes JSON imports work without assertions
    },
  },
};