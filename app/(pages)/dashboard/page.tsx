"use client";

import { UserButton, UserProfile, useClerk } from "@clerk/nextjs";

const Page = () => {
  const { signOut } = useClerk();

  return (
    <div>
      <h1>DashBoard</h1>

      <button onClick={() => signOut()}>Logout</button>
      {/* <UserButton />

      <UserProfile /> */}
    </div>
  );
};

export default Page;
