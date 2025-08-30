/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  serverModuleFormat: "cjs",
  dev: {
    port: process.env.HMR_SERVER_PORT || 8002,
  },
  serverBuildTarget: "netlify",
  server: "./server.js",
};