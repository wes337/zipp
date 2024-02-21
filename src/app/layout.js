import Background from "@/components/background";
import "@/styles/globals.scss";

export const metadata = {
  title: "Zipp",
  description:
    "Naturally flavored energy drink. The future of the modern American beverage!",
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
