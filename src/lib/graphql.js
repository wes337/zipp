import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Shopify from "@/lib/shopify";

const client = new ApolloClient({
  uri: `https://${Shopify.domain}/api/2024-01/graphql.json`,
  headers: {
    "X-Shopify-Storefront-Access-Token": Shopify.storefrontAccessToken,
  },
  cache: new InMemoryCache(),
  mode: "cors",
});

export async function getPageByHandle(handle) {
  try {
    const QUERY = gql`
  {
    page(handle: "${handle}") {
        title
        handle
        body
        bodySummary
    }
  }
`;

    const response = await client.query({
      query: QUERY,
    });

    return response.data.page;
  } catch {
    return null;
  }
}

export async function getAllPolicies() {
  try {
    const QUERY = gql`
      {
        shop {
          privacyPolicy {
            handle
            title
            body
          }
          refundPolicy {
            handle
            title
            body
          }
          shippingPolicy {
            handle
            title
            body
          }
          termsOfService {
            handle
            title
            body
          }
        }
      }
    `;

    const response = await client.query({
      query: QUERY,
    });

    return response.data.shop;
  } catch {
    return null;
  }
}

export async function getNavigation() {
  try {
    const QUERY = gql`
      {
        menu(handle: "main-menu") {
          items {
            id
            tags
            title
            url
            items {
              title
              url
              items {
                title
                url
              }
            }
          }
        }
      }
    `;

    const response = await client.query({
      query: QUERY,
    });

    return response.data.menu.items;
  } catch {
    return [];
  }
}
