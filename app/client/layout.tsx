export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10" style={{ display: "flex" }}>
      <main>{children}</main>
    </div>
  );
}
