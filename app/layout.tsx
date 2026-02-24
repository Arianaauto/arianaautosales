export const metadata = {
  title: "Ariana Auto Sales LLC",
  description: "New & used cars in Denver, CO",
};

const navLink: React.CSSProperties = {
  color: "#0f1b3d",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: 14,
  padding: "10px 12px",
  borderRadius: 10,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#ffffff", color: "#0f1b3d" }}>
        {/* TOP BAR */}
        <div style={{ background: "#0b1433", color: "#eaf0ff" }}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "10px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              fontSize: 13,
            }}
          >
            <div>
              <b>Ariana Auto Sales LLC</b> · 1061 E 70TH AVE, Denver, CO 80229
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <a href="tel:+17208233036" style={{ color: "#ffffff", textDecoration: "none", fontWeight: 900 }}>
                (720) 823-3036
              </a>
              <span style={{ opacity: 0.9 }}>New & Used Cars</span>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header style={{ borderBottom: "1px solid #e5e7eb", background: "#ffffff" }}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "16px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/logo.png"
                alt="Ariana Auto Sales LLC"
                style={{ width: 64, height: 44, objectFit: "contain" }}
              />
              <div>
                <div style={{ fontWeight: 950, letterSpacing: 0.4, fontSize: 18 }}>ARIANA AUTO SALES LLC</div>
                <div style={{ fontSize: 12, color: "#5b6b8b" }}>Buy · Pay & Trade Here</div>
              </div>
            </div>

            <nav style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <a href="/" style={navLink}>Home</a>
              <a href="/all-inventory" style={navLink}>Inventory</a>
              <a href="/contact-us" style={navLink}>Contact</a>
              <a href="/crypto-deal" style={navLink}>Crypto Deals</a>

              <a
                href="/all-inventory"
                style={{
                  ...navLink,
                  background: "#d71920",
                  color: "#ffffff",
                  fontWeight: 950,
                }}
              >
                View Cars
              </a>
            </nav>
          </div>
        </header>

        <main style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 16px" }}>{children}</main>

        <footer style={{ borderTop: "1px solid #e5e7eb", background: "#f7f9ff", marginTop: 46 }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "26px 16px", display: "grid", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 950 }}>Ariana Auto Sales LLC</div>
                <div style={{ fontSize: 13, color: "#5b6b8b", marginTop: 6 }}>
                  1061 E 70TH AVE, Denver, CO 80229
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <a href="tel:+17208233036" style={{ color: "#0f1b3d", textDecoration: "none", fontWeight: 950 }}>
                  (720) 823-3036
                </a>
                <div style={{ fontSize: 13, color: "#5b6b8b", marginTop: 6 }}>New & Used Cars</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: "#5b6b8b" }}>
              © {new Date().getFullYear()} Ariana Auto Sales LLC. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
