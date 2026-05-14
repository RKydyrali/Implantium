import type { ReactNode } from "react";
import { ConvexProvider } from "convex/react";
import { convexClient } from "@/lib/convex";

export function AppConvexProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convexClient}>{children}</ConvexProvider>;
}
