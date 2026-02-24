export const metadata = {
  title: "Ariana Auto Sales",
  description: "Used cars dealership",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
