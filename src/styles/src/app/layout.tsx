import "@/styles/globals.css";

export const metadata = {
  title: "Ariana Auto Sales",
  description: "Used cars dealership",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <header className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div>
              <div className="text-xl font-bold">ARIANA AUTO SALES LLC</div>
              <div className="text-sm text-neutral-600">1061 E 70TH AVE, Denver, CO 80229</div>
            </div>
            <a className="font-semibold" href="tel:+17208233036">(720) 823-3036</a>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600">
            © {new Date().getFullYear()} Ariana Auto Sales LLC
          </div>
        </footer>
      </body>
    </html>
  );
}
