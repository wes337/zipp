"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { formatPriceInUSD } from "@/utils";
import Shopify from "@/lib/shopify";
import { useToast } from "@/hooks/toast";

const ShopifyContext = createContext({});

export function useShopify() {
  return useContext(ShopifyContext);
}

export function ShopifyProvider(props) {
  const { openToast } = useToast();
  const [checkout, setCheckout] = useState();
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      setLoading(true);
      const checkout = await Shopify.getOrCreateCheckout();
      setCheckout(checkout);
      setInitialized(true);
      setLoading(false);
    };

    initialize();
  }, []);

  const totalItemsInCheckout = useMemo(() => {
    if (!checkout || checkout.lineItems.length === 0) {
      return 0;
    }

    let total = 0;

    checkout.lineItems.forEach((lineItem) => {
      total += lineItem.quantity;
    });

    return total;
  }, [checkout]);

  const addToCart = useCallback(
    async (variantId, quantity) => {
      if (!checkout) {
        return;
      }

      setLoading(true);

      const shouldUpdate =
        checkout.lineItems.length > 0 &&
        checkout.lineItems.find((lineItem) => lineItem.variantId === variantId);

      const updatedCheckout = shouldUpdate
        ? await Shopify.updateLineItems(checkout.id, variantId, quantity)
        : await Shopify.addLineItems(checkout.id, variantId, quantity);

      setCheckout(updatedCheckout);
      setLoading(false);
      openToast({
        text: "Item was added to your cart!",
        action: { text: "Go To Checkout!", href: "/cart" },
      });
    },
    [checkout, openToast]
  );

  const removeFromCart = useCallback(
    async (lineItemId) => {
      if (!checkout) {
        return;
      }

      setLoading(true);

      const updatedCheckout = await Shopify.removeLineItems(
        checkout.id,
        lineItemId
      );

      setCheckout(updatedCheckout);
      setLoading(false);
      openToast({ text: "Item was removed from your cart!" });
    },
    [checkout, openToast]
  );

  const buyItNow = useCallback(async (variantId, quantity = 1) => {
    setLoading(true);

    const newCheckout = await Shopify.createCheckout();
    await Shopify.addLineItems(newCheckout.id, variantId, quantity);
    window.location.href = newCheckout.webUrl;

    setLoading(false);
  }, []);

  const getPrices = useCallback(async (productId) => {
    try {
      setLoading(true);

      const product = await Shopify.getProduct(productId);

      const prices = product.variants.map((variant) => ({
        variant: variant.id,
        price: `${formatPriceInUSD(variant.price.amount)} ${
          variant.price.currencyCode
        }`,
      }));

      setLoading(false);
      return prices;
    } catch {
      setLoading(false);
    }
  }, []);

  const value = {
    checkout,
    initialized,
    totalItemsInCheckout,
    addToCart,
    buyItNow,
    loading,
    removeFromCart,
    getPrices,
  };

  return (
    <ShopifyContext.Provider value={value}>
      {props.children}
    </ShopifyContext.Provider>
  );
}
