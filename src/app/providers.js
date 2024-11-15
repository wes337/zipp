"use client";

import { Suspense } from "react";
import { ShopifyProvider } from "@/hooks/shopify";
import { ToastProvider } from "@/hooks/toast";

export default function Providers({ children }) {
  return (
    <Suspense>
      <ToastProvider>
        <ShopifyProvider>{children}</ShopifyProvider>
      </ToastProvider>
    </Suspense>
  );
}
