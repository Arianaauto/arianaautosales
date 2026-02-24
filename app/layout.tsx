export const metadata = {
  title: "Ariana Auto Sales",
  description: "Used cars dealership",
};

const linkStyle: React.CSSProperties = {
  color: "#0f172a",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 14,
  padding: "10px 12px",
  borderRadius: 10,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#ffffff", color: "#0f172a" }}>
        {/* TOP BAR */}
        <div style={{ background: "#0b1220", color: "#e2e8f0" }}>
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
              <a href="tel:+17208233036" style={{ color: "#ffffff", textDecoration: "none", fontWeight: 800 }}>
                (720) 823-3036
              </a>
              <span style={{ opacity: 0.9 }}>By appointment only</span>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header style={{ borderBottom: "1px solid #e5e7eb", background: "#ffffff" }}>
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "18px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #dc2626, #1e3a8a)",
                }}
              />
              <div>
                <div style={{ fontWeight: 900, letterSpacing: 0.4, fontSize: 18 }}>ARIANA AUTO SALES</div>
                <div style={{ fontSize: 12, color: "#64748b" }}>Quality vehicles · Great deals</div>
              </div>
            </div>

            <nav style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <a href="/" style={linkStyle}>
                Home
              </a>
              <a href="/all-inventory" style={linkStyle}>
                Inventory
              </a>
              <a href="/contact-us" style={linkStyle}>
                Contact
              </a>
              <a href="/crypto-deal" style={linkStyle}>
                Crypto Deals
              </a>
              <a
                href="/all-inventory"
                style={{
                  ...linkStyle,
                  background: "#0f172a",
                  color: "#ffffff",
                  fontWeight: 900,
                }}
              >
                View Cars
              </a>
            </nav>
          </div>
        </header>

        <main style={{ maxWidth: 1180, margin: "0 auto", padding: "26px 16px" }}>{children}</main>

        <footer style={{ borderTop: "1px solid #e5e7eb", background: "#fafafa", marginTop: 46 }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "26px 16px", display: "grid", gap: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontWeight: 900 }}>Ariana Auto Sales LLC</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>
                  1061 E 70TH AVE, Denver, CO 80229
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <a href="tel:+17208233036" style={{ color: "#0f172a", textDecoration: "none", fontWeight: 900 }}>
                  (720) 823-3036
                </a>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>By appointment only</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: "#64748b" }}>
              © {new Date().getFullYear()} Ariana Auto Sales LLC. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
