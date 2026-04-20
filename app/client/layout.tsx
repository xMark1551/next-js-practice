export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <main>{children}</main>
    </div>
  );
}
