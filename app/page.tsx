const card: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  overflow: "hidden",
  background: "#ffffff",
  boxShadow: "0 12px 30px rgba(2, 6, 23, 0.08)",
};

export default function Home() {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      {/* HERO */}
      <section style={{ ...card, borderRadius: 22, background: "#0b1433" }}>
        <div style={{ position: "relative", minHeight: 420 }}>
          <img
            src="/dealer.jpg"
            alt="Ariana Auto Sales"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgba(11,20,51,0.92) 0%, rgba(11,20,51,0.55) 45%, rgba(11,20,51,0.18) 100%)",
            }}
          />

          <div style={{ position: "relative", padding: 22, maxWidth: 760 }}>
            <img
              src="/logo.png"
              alt="Ariana Auto Sales LLC"
              style={{ width: 220, height: "auto", objectFit: "contain", marginBottom: 10 }}
            />

            <h1 style={{ margin: 0, fontSize: 44, fontWeight: 950, letterSpacing: -0.6, lineHeight: 1.05, color: "#fff" }}>
              New & Used Cars in Denver
            </h1>

            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 16, color: "rgba(255,255,255,0.92)", lineHeight: 1.7 }}>
              Browse our inventory, schedule a test drive, and get a great deal. Call or text us — fast response.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
              <a
                href="/all-inventory"
                style={{
                  background: "#d71920",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontWeight: 950,
                }}
              >
                View Inventory
              </a>

              <a
                href="/contact-us"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.28)",
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontWeight: 900,
                }}
              >
                Contact Us
              </a>

              <a
                href="tel:+17208233036"
                style={{
                  background: "#ffffff",
                  color: "#0b1433",
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontWeight: 950,
                }}
              >
                Call (720) 823-3036
              </a>
            </div>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["Clean Titles", "Financing Options", "Trade-Ins Welcome", "Crypto Deals"].map((t) => (
                <span
                  key={t}
                  style={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.22)",
                    padding: "7px 10px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 850,
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SECTIONS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
        {[
          { t: "Inventory", d: "Browse all vehicles currently available.", cta: "View Inventory", href: "/all-inventory" },
          { t: "Contact", d: "Questions? We reply fast by call/text.", cta: "Contact Us", href: "/contact-us" },
          { t: "Crypto Deals", d: "Qualifying deals get up to 15% discount.", cta: "Learn More", href: "/crypto-deal" },
        ].map((x) => (
          <div key={x.t} style={{ ...card, padding: 16 }}>
            <div style={{ fontWeight: 950, fontSize: 16 }}>{x.t}</div>
            <div style={{ marginTop: 8, fontSize: 13, color: "#5b6b8b", lineHeight: 1.6 }}>{x.d}</div>
            <a
              href={x.href}
              style={{
                display: "inline-block",
                marginTop: 12,
                textDecoration: "none",
                fontWeight: 950,
                color: "#0b1433",
              }}
            >
              {x.cta} →
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
