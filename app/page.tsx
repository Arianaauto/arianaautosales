export default function Home() {
  return (
    <div style={{ display: "grid", gap: 22 }}>
      <section style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 22 }}>
        <h1 style={{ margin: 0, fontSize: 34, fontWeight: 800 }}>Highest Quality Vehicles In Town</h1>
        <p style={{ marginTop: 10, marginBottom: 0, color: "#555", lineHeight: 1.6 }}>
          Browse our inventory and contact us to schedule a test drive. We offer financing options and trade-ins.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          <a href="/all-inventory" style={{ background: "#111", color: "#fff", padding: "10px 14px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>
            View Inventory
          </a>
          <a href="/contact-us" style={{ border: "1px solid #111", color: "#111", padding: "10px 14px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>
            Contact Us
          </a>
        </div>
      </section>

      <section style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end" }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Featured Inventory</h2>
          <a href="/all-inventory" style={{ fontSize: 13, color: "#111" }}>See all</a>
        </div>

        {/* TEMP cards (next step we replace with real inventory) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          {["2018 BMW X5M", "2017 Mercedes C300", "2019 Audi A5"].map((t) => (
            <div key={t} style={{ border: "1px solid #e5e5e5", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ background: "#f2f2f2", height: 150 }} />
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 800 }}>{t}</div>
                <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>Miles: — · Price: —</div>
                <a href="/all-inventory" style={{ display: "inline-block", marginTop: 10, fontSize: 13, color: "#111" }}>
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
