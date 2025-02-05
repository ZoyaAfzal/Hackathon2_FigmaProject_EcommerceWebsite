import { loadStripe } from "@stripe/stripe-js";

// Ensure that the loadStripe promise is properly assigned to the variable.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Now you can use `stripePromise` later in your code.
if (!stripePromise && process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  console.error("Stripe failed to load.");
}