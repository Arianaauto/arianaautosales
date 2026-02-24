export default function Inventory() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}>All Inventory</h1>

      <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 14, display: "grid", gap: 10 }}>
        <div style={{ fontWeight: 800 }}>Filters (next step)</div>
        <div style={{ fontSize: 13, color: "#666" }}>We’ll add make/model/price filters and real inventory from CSV.</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
        {["2018 BMW X5M", "2017 Mercedes C300", "2019 Audi A5", "2016 Jeep Grand Cherokee"].map((t) => (
          <div key={t} style={{ border: "1px solid #e5e5e5", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ background: "#f2f2f2", height: 150 }} />
            <div style={{ padding: 14 }}>
              <div style={{ fontWeight: 800 }}>{t}</div>
              <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>Miles: — · Price: —</div>
              <a href="/contact-us" style={{ display: "inline-block", marginTop: 10, fontSize: 13, color: "#111" }}>
                Request Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
