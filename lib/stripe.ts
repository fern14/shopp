
import { STRIPE_SECRET_KEY } from "@/environments";
import Stripe from "stripe";

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
    appInfo: {
        name: 'Ignite Shop',
    }
})