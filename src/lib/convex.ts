import { ConvexReactClient } from "convex/react";

const configuredUrl = import.meta.env.VITE_CONVEX_URL as string | undefined;

export const isConvexConfigured = Boolean(configuredUrl);

export const convexClient = new ConvexReactClient(
  configuredUrl || "https://placeholder.convex.cloud"
);
