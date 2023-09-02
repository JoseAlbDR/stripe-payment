import "dotenv/config";
import { Response } from "express";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2023-08-16",
});
import { ICustomShoopBody } from "../types/interfaces";
const stripeController = async (req: ICustomShoopBody, res: Response) => {
  const { total_amount, shipping_fee } = req.body;
  const calculateOrderAmount = () => {
    return total_amount + shipping_fee;
  };

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: "usd",
  });
  console.log(paymentIntent);
  res.json({ clientSecret: paymentIntent.client_secret });
};

export default stripeController;
