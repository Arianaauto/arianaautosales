export default function CryptoDeal() {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}>Cryptocurrency Deals</h1>

      <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16, color: "#333", lineHeight: 1.7 }}>
        <p style={{ marginTop: 0 }}>
          We accept cryptocurrency payments and offer a <b>15% discount</b> for qualifying crypto deals.
        </p>
        <p>
          Each month, <b>10%</b> of crypto-deal proceeds are donated to Denver Children&apos;s Home.
        </p>
        <p style={{ marginBottom: 0 }}>
          Call: <a href="tel:+17208233036" style={{ color: "#111" }}>(720) 823-3036</a>
        </p>
      </div>
    </div>
  );
}
