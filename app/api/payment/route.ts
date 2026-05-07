import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  console.log("sample");

  return NextResponse.json("sample");
}

export async function POST(req: Request, res: Response) {
  console.log("sample");

  try {
    const response = await axios.post(
      "https://api.paymongo.com/v1/checkout_sessions",
      {
        data: {
          attributes: {
            billing: {
              name: "Mark",
            },
            line_items: [
              {
                currency: "PHP",
                amount: 50000,
                name: "Laptop",
                quantity: 1,
              },
            ],
            payment_method_types: ["gcash", "paymaya", "card"],
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
          },
        },
      },
      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: "Basic " + Buffer.from(process.env.PAYMONGO_SECRET_KEY + ":").toString("base64"),
        },
      },
    );

    return NextResponse.json({
      checkout_url: response.data.data.attributes.checkout_url,
    });
  } catch (err) {
    console.log(err.response.data);
    return NextResponse.json(err.response.data);
  }
}
