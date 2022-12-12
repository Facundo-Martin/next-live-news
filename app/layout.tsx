import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-50 dark:bg-zinc-900 transition-all duration-700">
        <Header />
        <main className="max-w-6xl mx-auto px-4"> {children}</main>
      </body>
    </html>
  );
}
