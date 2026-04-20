import Link from "next/link";

const page = () => {
  return (
    <main className="p-10">
      <div className="flex gap-10">
        <h1>Navigation</h1>

        <Link href="/auth/login">Login</Link>
        <Link href="/posts">Post</Link>

        <Link href="/admin">Admin</Link>
        <Link href="/client">Client</Link>
      </div>
    </main>
  );
};

export default page;
