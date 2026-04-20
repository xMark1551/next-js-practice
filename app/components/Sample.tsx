"use client";

import { useSignIn } from "@clerk/nextjs";

const Sample = () => {
  const { signIn } = useSignIn();

  const signInWithGoole = async () => {
    await signIn.sso({
      strategy: "oauth_google",
      redirectCallbackUrl: "/sso-callback", // was redirectUrl
      redirectUrl: "/dashboard", // was redirectUrlComplete
    });
  };

  return (
    <div>
      <button onClick={signInWithGoole}>Login as Google</button>
    </div>
  );
};

export default Sample;
