import Client from "shopify-buy";
import Cache from "@/lib/cache";

export default class Shopify {
  static client;
  static domain = "zippdrink.myshopify.com";
  static storefrontAccessToken = "31e9649924bff3888cf65d7304cc2106";

  static {
    Shopify.client = Client.buildClient({
      apiVersion: "2023-01",
      domain: Shopify.domain,
      storefrontAccessToken: Shopify.storefrontAccessToken,
    });
  }

  static async getShop() {
    const shop = await Shopify.client.shop.fetchInfo();
    const policies = await Shopify.client.shop.fetchPolicies();

    return { shop, policies };
  }

  static async getCollections() {
    const collections = await Shopify.client.collection.fetchAll();

    return collections;
  }

  static async getAllProducts() {
    const products = await Shopify.client.product.fetchAll(100);

    return products;
  }

  static async getCollectionWithProducts(collectionId) {
    try {
      const collection = await Shopify.client.collection.fetchWithProducts(
        collectionId,
        { productsFirst: 100 }
      );

      return collection || null;
    } catch {
      return null;
    }
  }

  static async getCollectionProducts(collectionId) {
    try {
      const collection = await Shopify.client.collection.fetchWithProducts(
        collectionId,
        { productsFirst: 100 }
      );

      return collection ? collection.products : [];
    } catch {
      return [];
    }
  }

  static async getAllCollectionsWithProducts() {
    const collections = await Shopify.client.collection.fetchAll();

    const collectionsWithProducts = await Promise.all(
      collections.map(async (collection) => {
        return {
          ...collection,
          products: await this.getCollectionProducts(collection.id),
        };
      })
    );

    return collectionsWithProducts;
  }

  static async getProduct(productId) {
    const product = await Shopify.client.product.fetch(productId);

    return {
      id: product.id,
      availableForSale: product.availableForSale,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      descriptionHtml: product.descriptionHtml,
      description: product.description,
      handle: product.handle,
      title: product.title,
      variants: product.variants.map((variant) => ({
        id: variant.id,
        title: variant.title,
      })),
      price: product.variants?.[0]?.price?.amount,
    };
  }

  static async getCheckout(checkoutId) {
    const checkout = await Shopify.client.checkout.fetch(checkoutId);

    return checkout;
  }

  static async createCheckout() {
    const checkout = await Shopify.client.checkout.create();

    return checkout;
  }

  static async getOrCreateCheckout() {
    const cachedCheckout = Cache.get("checkout");

    const existingCheckout = cachedCheckout
      ? await Shopify.getCheckout(cachedCheckout)
      : null;

    if (
      existingCheckout &&
      existingCheckout.ready &&
      !existingCheckout.completedAt &&
      !existingCheckout.order
    ) {
      return existingCheckout;
    }

    const checkout = await Shopify.createCheckout();

    Cache.set("checkout", checkout.id, 1800);

    return checkout;
  }

  static async removeLineItems(checkoutId, lineItemId) {
    const checkout = await Shopify.client.checkout.removeLineItems(checkoutId, [
      lineItemId,
    ]);

    return checkout;
  }

  static async updateLineItems(checkoutId, lineItemId, quantity) {
    const checkout = await Shopify.client.checkout.updateLineItems(checkoutId, [
      {
        id: lineItemId,
        quantity,
      },
    ]);

    return checkout;
  }

  static async addLineItems(checkoutId, variantId, quantity) {
    const checkout = await Shopify.client.checkout.addLineItems(checkoutId, [
      {
        variantId,
        quantity: quantity || 1,
      },
    ]);

    return checkout;
  }
}
