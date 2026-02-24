export default function Inventory() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}>All Inventory</h1>

      <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 14 }}>
        <div style={{ fontWeight: 700 }}>Filters (coming next)</div>
        <div style={{ fontSize: 13, color: "#666" }}>
          We will add real filters and CSV inventory import next.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
        {["2018 BMW X5M", "2017 Mercedes C300", "2019 Audi A5", "2016 Jeep Grand Cherokee"].map((car) => (
          <div key={car} style={{ border: "1px solid #e5e5e5", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ background: "#f2f2f2", height: 150 }} />
            <div style={{ padding: 14 }}>
              <div style={{ fontWeight: 800 }}>{car}</div>
              <div style={{ fontSize: 13, color: "#666", marginTop: 6 }}>
                Miles: — · Price: —
              </div>
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
