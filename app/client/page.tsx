"use client";

import { Button } from "@/components/ui/button";

const page = () => {
  const handlePayment = async () => {
    const res = await fetch(`/api/payment`, { method: "POST" });

    const data = await res.json();

    window.location.href = data.checkout_url;
  };

  return (
    <div>
      <h1>Client</h1>
      <Button onClick={handlePayment}>Pay</Button>
    </div>
  );
};

export default page;
