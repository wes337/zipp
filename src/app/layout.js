import Background from "@/components/background";
import "@/styles/globals.scss";

export const metadata = {
  title: "Zipp",
  description:
    "Naturally flavored energy drink. The future of the modern American beverage!",
  image: "https://zipp-coral.vercel.app/images/poster.png",
  openGraph: {
    title: "Zipp",
    description:
      "Naturally flavored energy drink. The future of the modern American beverage!",
    url: "https://zipp-coral.vercel.app",
    siteName: "Zipp",
    images: [
      {
        url: "https://zipp-coral.vercel.app/images/poster.png",
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
