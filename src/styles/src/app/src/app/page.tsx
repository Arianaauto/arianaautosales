import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-xl border p-6">
        <h1 className="text-3xl font-bold">Highest Quality Vehicles In Town</h1>
        <p className="mt-2 text-neutral-700">
          Browse our inventory and contact us to schedule a test drive.
        </p>
        <div className="mt-4 flex gap-3">
          <Link className="rounded-lg bg-black text-white px-4 py-2" href="/all-inventory">
            View Inventory
          </Link>
          <Link className="rounded-lg border px-4 py-2" href="/contact-us">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
