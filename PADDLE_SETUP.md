# Paddle Payment Integration Setup

This guide explains how to set up Paddle payment integration for the VCard project.

## Prerequisites

1. A Paddle account (sign up at [https://paddle.com](https://paddle.com))
2. Your project running locally

## Configuration Steps

### 1. Get Paddle API Keys

1. Log in to your Paddle Dashboard
2. Go to Developer Tools > Authentication
3. Copy your **Client-side token** (for frontend)
4. Copy your **API key** (for backend)

### 2. Update Environment Variables

Update your `.env.local` file with your actual Paddle keys:

```env
# Replace with your actual Paddle keys
NEXT_PUBLIC_PADDLE_CLIENT_SIDE_TOKEN=your_actual_client_side_token_here
PADDLE_API_KEY=your_actual_api_key_here
```

### 3. Set Up Webhook (Optional for Development)

For production or to test webhooks locally:

1. In Paddle Dashboard, go to Developer Tools > Notifications
2. Add a new webhook endpoint: `https://yourdomain.com/api/paddle/webhook`
3. Select the events you want to receive
4. Copy the webhook secret and add to `.env.local`:
   ```env
   PADDLE_WEBHOOK_SECRET=your_webhook_secret_here
   ```

## Testing Payment Flow

### Test Mode

Paddle automatically runs in sandbox mode for development. You can use:

- **Test card numbers**: Any valid card format (e.g., `4242 4242 4242 4242`)
- **Expiry**: Any future date
- **CVC**: Any 3-digit number

### Testing Steps

1. Go to `/services` page
2. Click on any "Pay Now" button
3. You'll be redirected to the payment page
4. Click "Pay Securely" to open Paddle checkout
5. Use test card numbers above
6. Complete payment to test success flow

## Payment Flow

1. **Services Page** (`/services`) - Shows all services with dual CTA (WhatsApp + Pay Now)
2. **Payment Page** (`/pay/[slug]`) - Shows service details and Paddle checkout
3. **Paddle Checkout** - Secure payment processing overlay
4. **Success Page** (`/pay/success`) - Confirmation and next steps
5. **Webhook** (`/api/paddle/webhook`) - Handles payment events

## Features Implemented

✅ **Dual CTA Buttons**: WhatsApp contact OR direct payment
✅ **Multi-language Support**: Arabic (RTL), English, Turkish
✅ **One-time Payments**: For project-based services
✅ **Recurring Payments**: For monthly subscription services
✅ **Mobile Responsive**: Works on all devices
✅ **Secure Processing**: All payments handled by Paddle
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

## Paddle vs Stripe Advantages

### Why Paddle?

- **Tax Compliance**: Automatic VAT/tax handling worldwide
- **Global Coverage**: 200+ countries and territories
- **Merchant of Record**: Paddle handles all compliance and tax filing
- **Built-in Fraud Protection**: Advanced fraud detection
- **Subscription Management**: Built-in dunning management
- **No Additional Fees**: No setup fees or monthly charges

## Security Notes

- Never commit real API keys to version control
- Use sandbox mode in development
- Enable webhook signature verification in production
- Implement proper error handling and logging

## Troubleshooting

### Common Issues

1. **"Failed to initialize payment system"** - Check your `.env.local` file has correct keys
2. **Checkout not opening** - Verify `NEXT_PUBLIC_PADDLE_CLIENT_SIDE_TOKEN` is set
3. **Webhook errors** - Ensure webhook secret matches Paddle Dashboard
4. **CORS issues** - Make sure your domain is whitelisted in Paddle settings

### Environment Setup

Make sure your environment variables are correctly named:
- `NEXT_PUBLIC_PADDLE_CLIENT_SIDE_TOKEN` (for frontend)
- `PADDLE_API_KEY` (for backend API calls)
- `PADDLE_WEBHOOK_SECRET` (for webhook verification)

### Logs

Check browser console and terminal for error messages. Paddle provides detailed error information in the developer console.

## Support

For Paddle-specific issues, refer to:
- [Paddle Documentation](https://developer.paddle.com/)
- [Paddle API Reference](https://developer.paddle.com/api-reference)
- [Paddle Support](https://paddle.com/support)

## Migration from Stripe

If migrating from Stripe:
1. Export customer data from Stripe Dashboard
2. Set up equivalent products/prices in Paddle
3. Update payment flows to use Paddle checkout
4. Test all payment scenarios thoroughly
5. Update webhook handlers for Paddle events
