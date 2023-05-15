/** @type {import('next').NextConfig} */
const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

const nextConfig = {}

module.exports = withPayload(nextConfig, {
  configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),
  cssPath: path.resolve(__dirname, "./src/payload/styles/admin.scss"),
  payloadPath: path.resolve(process.cwd(), "./src/payload/payloadClient.ts"),
});
