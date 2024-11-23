import Providers from "@/app/providers";
import Background from "@/components/background";
import Footer from "@/components/footer";
import MusicPlayer from "@/components/music-player";
import { CDN_URL } from "@/utils";
import "@/styles/globals.scss";

export const metadata = {
  title: "Zipp",
  description:
    "Naturally flavored energy drink. The future of the modern American beverage!",
  image: `${CDN_URL}/images/thumbnail.png`,
  openGraph: {
    title: "Zipp",
    description:
      "Naturally flavored energy drink. The future of the modern American beverage!",
    url: "https://www.zipp.rip",
    siteName: "Zipp",
    images: [
      {
        url: `${CDN_URL}/images/thumbnail.png`,
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
          <MusicPlayer />
          <main>{children}</main>
          <Background />
          <Footer />
        </Providers>
        {/* <Cursor /> */}
      </body>
    </html>
  );
}
