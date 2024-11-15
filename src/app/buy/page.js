import Shopify from "@/lib/shopify";
import TopBar from "@/components/top-bar";
import Product from "@/components/product";

const PRODUCT_ID = "gid://shopify/Product/7648749420578";
const product = await Shopify.getProduct(PRODUCT_ID);

export default function BuyPage() {
  return (
    <>
      <TopBar />
      <Product product={product} />
    </>
  );
}
