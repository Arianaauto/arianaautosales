const pill: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "8px 12px",
  borderRadius: 999,
  border: "1px solid #e5e7eb",
  background: "#ffffff",
  fontSize: 13,
  color: "#334155",
  fontWeight: 700,
};

const card: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 16,
  overflow: "hidden",
  background: "#ffffff",
  boxShadow: "0 10px 25px rgba(2, 6, 23, 0.06)",
};

export default function Home() {
  return (
    <div style={{ display: "grid", gap: 22 }}>
      <section
        style={{
          ...card,
          borderRadius: 22,
          padding: 22,
          background: "linear-gradient(135deg, rgba(220,38,38,0.10), rgba(30,58,138,0.10))",
        }}
      >
        <div style={{ display: "grid", gap: 14 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={pill}>✔ Clean Titles</span>
            <span style={pill}>✔ Financing Options</span>
            <span style={pill}>✔ Trade-Ins Welcome</span>
            <span style={pill}>✔ Crypto Deals</span>
          </div>

          <h1 style={{ margin: 0, fontSize: 38, fontWeight: 900, letterSpacing: -0.3, lineHeight: 1.1 }}>
            Find Your Next Car Today
          </h1>

          <p style={{ margin: 0, fontSize: 16, color: "#334155", lineHeight: 1.7, maxWidth: 860 }}>
            Browse our inventory and contact us to schedule a test drive. We focus on quality vehicles, transparent deals,
            and a smooth buying experience.
          </p>

          <div
            style={{
              marginTop: 6,
              ...card,
              borderRadius: 18,
              padding: 14,
              display: "grid",
              gap: 10,
              background: "#ffffff",
            }}
          >
            <div style={{ fontWeight: 900, color: "#0f172a" }}>Search Inventory</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <input
                placeholder="Search make, model, year..."
                style={{
                  flex: "1 1 260px",
                  padding: "12px 12px",
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  outline: "none",
                }}
              />
              <select
                style={{
                  flex: "0 0 180px",
                  padding: "12px 12px",
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                }}
              >
                <option>Any Price</option>
                <option>$0 - $10,000</option>
                <option>$10,000 - $20,000</option>
                <option>$20,000 - $35,000</option>
                <option>$35,000+</option>
              </select>
              <a
                href="/all-inventory"
                style={{
                  flex: "0 0 auto",
                  background: "#0f172a",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontWeight: 900,
                }}
              >
                View Inventory
              </a>
            </div>
            <div style={{ fontSize: 12, color: "#64748b" }}>
              Next step: we’ll connect this to real inventory (manual + CSV import).
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href="/all-inventory"
              style={{
                background: "#dc2626",
                color: "#fff",
                textDecoration: "none",
                padding: "11px 14px",
                borderRadius: 12,
                fontWeight: 900,
              }}
            >
              Browse Cars
            </a>
            <a
              href="/contact-us"
              style={{
                border: "1px solid #0f172a",
                color: "#0f172a",
                textDecoration: "none",
                padding: "11px 14px",
                borderRadius: 12,
                fontWeight: 900,
                background: "#fff",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 10, flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 900 }}>Featured Inventory</h2>
          <a href="/all-inventory" style={{ fontSize: 13, color: "#0f172a", fontWeight: 800 }}>
            See all →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {[
            { title: "2018 BMW X5M", meta: "AWD · Turbo · Sport" },
            { title: "2017 Mercedes C300", meta: "Luxury · Efficient" },
            { title: "2019 Audi A5", meta: "Quattro · Premium" },
          ].map((x) => (
            <div key={x.title} style={card}>
              <div style={{ height: 160, background: "#f1f5f9" }} />
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 900 }}>{x.title}</div>
                <div style={{ fontSize: 13, color: "#64748b", marginTop: 6 }}>{x.meta}</div>
                <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, color: "#64748b" }}>Miles: — · Price: —</span>
                  <a href="/contact-us" style={{ fontSize: 13, color: "#0f172a", fontWeight: 800 }}>
                    Request Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...card, padding: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          {[
            { t: "Transparent Pricing", d: "Straightforward deals and clean paperwork." },
            { t: "Fast Response", d: "Call or text — we reply quickly." },
            { t: "Crypto Discounts", d: "15% discount for qualifying crypto deals." },
            { t: "Community Support", d: "10% donated monthly from crypto deals." },
          ].map((b) => (
            <div key={b.t} style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 14 }}>
              <div style={{ fontWeight: 900 }}>{b.t}</div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 6, lineHeight: 1.6 }}>{b.d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
