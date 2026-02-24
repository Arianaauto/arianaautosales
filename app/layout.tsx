export const metadata = {
  title: "Ariana Auto Sales",
  description: "Used cars dealership",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#fff", color: "#111" }}>
        <header style={{ borderBottom: "1px solid #e5e5e5" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: 0.3 }}>ARIANA AUTO SALES LLC</div>
              <div style={{ fontSize: 13, color: "#666" }}>1061 E 70TH AVE, Denver, CO 80229</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <a href="tel:+17208233036" style={{ fontWeight: 700, color: "#111", textDecoration: "none" }}>(720) 823-3036</a>
              <div style={{ fontSize: 13, color: "#666" }}>By appointment only</div>
            </div>
          </div>

          <nav style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 14px", display: "flex", gap: 16, fontSize: 14 }}>
            <a href="/" style={{ color: "#111", textDecoration: "none" }}>Home</a>
            <a href="/all-inventory" style={{ color: "#111", textDecoration: "none" }}>All Inventory</a>
            <a href="/contact-us" style={{ color: "#111", textDecoration: "none" }}>Contact Us</a>
            <a href="/crypto-deal" style={{ color: "#111", textDecoration: "none" }}>Crypto Deal</a>
          </nav>
        </header>

        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>{children}</main>

        <footer style={{ borderTop: "1px solid #e5e5e5", marginTop: 40 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 16px", fontSize: 13, color: "#666" }}>
            © {new Date().getFullYear()} Ariana Auto Sales LLC. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
