import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-20 space-y-4">
      <Link href="/">Back</Link>

      <main>{children}</main>
    </div>
  );
}
