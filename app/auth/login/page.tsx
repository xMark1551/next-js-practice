import Sample from "@/app/components/Sample";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <SignInButton fallbackRedirectUrl={"/dashboard"} />

      <Sample />

      <div>
        <Link href="/">Back</Link>
      </div>
    </div>
  );
};

export default Login;
