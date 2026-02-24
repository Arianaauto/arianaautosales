export default function Contact() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}>Contact Us</h1>

      <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16, lineHeight: 1.6 }}>
        <div style={{ fontWeight: 800 }}>Ariana Auto Sales LLC</div>
        <div style={{ color: "#666" }}>1061 E 70TH AVE, Denver, CO 80229</div>
        <div style={{ marginTop: 10 }}>
          Phone: <a href="tel:+17208233036" style={{ color: "#111" }}>(720) 823-3036</a>
        </div>
        <div style={{ color: "#666" }}>By appointment only</div>
      </div>

      <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
        <div style={{ fontWeight: 800, marginBottom: 10 }}>Send a message</div>
        <form style={{ display: "grid", gap: 10 }}>
          <input placeholder="Name" style={{ padding: 10, borderRadius: 10, border: "1px solid #ddd" }} />
          <input placeholder="Phone" style={{ padding: 10, borderRadius: 10, border: "1px solid #ddd" }} />
          <input placeholder="Email" style={{ padding: 10, borderRadius: 10, border: "1px solid #ddd" }} />
          <textarea placeholder="Message" rows={5} style={{ padding: 10, borderRadius: 10, border: "1px solid #ddd" }} />
          <button type="button" style={{ padding: 10, borderRadius: 10, border: "none", background: "#111", color: "#fff", fontWeight: 800 }}>
            Submit (next step)
          </button>
          <div style={{ fontSize: 12, color: "#666" }}>
            Next step: we’ll wire this form to email + database.
          </div>
        </form>
      </div>
    </div>
  );
}
