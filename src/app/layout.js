import Providers from "@/app/providers";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";
import "@/styles/globals.scss";

export const metadata = {
  title: "Zipp",
  description:
    "Naturally flavored energy drink. The future of the modern American beverage!",
  image: "https://www.zipp.rip/images/poster.png",
  openGraph: {
    title: "Zipp",
    description:
      "Naturally flavored energy drink. The future of the modern American beverage!",
    url: "https://www.zipp.rip",
    siteName: "Zipp",
    images: [
      {
        url: "https://www.zipp.rip/images/poster.png",
        width: 700,
        height: 545,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main>{children}</main>
          <Background />
          <Footer />
        </Providers>
        {/* <Cursor /> */}
      </body>
    </html>
  );
}
