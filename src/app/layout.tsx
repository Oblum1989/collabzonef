import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex flex-col h-full">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="container flex justify-center p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
