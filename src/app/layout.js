import Background from "@/components/background";
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
        <main>{children}</main>
        <Background />
      </body>
    </html>
  );
}
