# Stripe Payment Integration Setup

This guide explains how to set up Stripe payment integration for the VCard project.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Your project running locally

## Configuration Steps

### 1. Get Stripe API Keys

1. Log in to your Stripe Dashboard
2. Go to Developers > API keys
3. Copy your **Publishable key** (starts with `pk_test_`)
4. Copy your **Secret key** (starts with `sk_test_`)

### 2. Update Environment Variables

Update your `.env.local` file with your actual Stripe keys:

```env
# Replace with your actual Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
```

### 3. Set Up Webhook (Optional for Development)

For production or to test webhooks locally:

1. Install Stripe CLI: `npm install -g stripe-cli`
2. Login to Stripe: `stripe login`
3. Forward events to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
4. Copy the webhook signing secret and add to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   ```

## Testing Payment Flow

### Test Cards

Use these test card numbers for testing:

- **Successful payment**: `4242 4242 4242 4242`
- **Payment declined**: `4000 0000 0000 0002`
- **Requires authentication**: `4000 0025 0000 3155`

Use any future expiry date, any 3-digit CVC, and any postal code.

### Testing Steps

1. Go to `/services` page
2. Click on any "Pay Now" button
3. You'll be redirected to the payment page
4. Click "Process Order" to open Stripe checkout
5. Use test card numbers above
6. Complete payment to test success flow

## Payment Flow

1. **Services Page** (`/services`) - Shows all services with dual CTA (WhatsApp + Pay Now)
2. **Payment Page** (`/pay/[slug]`) - Shows service details and Stripe checkout
3. **Stripe Checkout** - Secure payment processing
4. **Success Page** (`/pay/success`) - Confirmation and next steps
5. **Webhook** (`/api/stripe/webhook`) - Handles payment events

## Features Implemented

✅ **Dual CTA Buttons**: WhatsApp contact OR direct payment
✅ **Multi-language Support**: Arabic (RTL), English, Turkish
✅ **One-time Payments**: For project-based services
✅ **Recurring Payments**: For monthly subscription services
✅ **Mobile Responsive**: Works on all devices
✅ **Secure Processing**: All payments handled by Stripe
✅ **Success/Error Handling**: User-friendly feedback
✅ **Webhook Integration**: For payment event handling

## Pricing Packages

The system includes realistic pricing packages:

### One-Time Services
1. **Starter Package** - $299-499 (Basic websites, simple apps)
2. **Professional Package** - $799-1299 (Advanced features, integrations)
3. **Enterprise Package** - $1999-2999 (Complex systems, full solutions)

### Recurring Services  
1. **Basic Maintenance** - $29-49/month (Updates, basic support)
2. **Standard Support** - $99-149/month (Priority support, monitoring)
3. **Premium Management** - $199-299/month (Full management, optimization)

## Security Notes

- Never commit real API keys to version control
- Use test keys in development
- Enable webhook signature verification in production
- Implement proper error handling and logging

## Troubleshooting

### Common Issues

1. **"Invalid API key"** - Check your `.env.local` file has correct keys
2. **Checkout not opening** - Verify `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set
3. **Webhook errors** - Ensure webhook secret matches Stripe CLI output
4. **CORS issues** - Make sure your domain is whitelisted in Stripe settings

### Logs

Check browser console and terminal for error messages. Stripe provides detailed error information.

## Support

For Stripe-specific issues, refer to:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Test Cards](https://stripe.com/docs/testing#cards)
