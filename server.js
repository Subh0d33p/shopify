import { createRequestHandler } from "@netlify/remix-adapter";

export default createRequestHandler({
  build: require("./build"),
  mode: process.env.NODE_ENV,
});