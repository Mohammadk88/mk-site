import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('paddle-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing Paddle signature' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET!;
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);

    // Handle different Paddle events
    switch (event.event_type) {
      case 'transaction.completed': {
        // Handle successful one-time payment
        console.log('One-time payment completed:', {
          transactionId: event.data.id,
          customerId: event.data.customer_id,
          amount: event.data.details.totals.grand_total,
          currency: event.data.currency_code,
          customData: event.data.custom_data,
        });

        // Here you can:
        // 1. Save the successful payment to your database
        // 2. Send confirmation email to customer
        // 3. Update order status
        // 4. Trigger any post-payment workflows

        break;
      }

      case 'subscription.created': {
        // Handle new subscription
        console.log('New subscription created:', {
          subscriptionId: event.data.id,
          customerId: event.data.customer_id,
          status: event.data.status,
          customData: event.data.custom_data,
        });

        break;
      }

      case 'subscription.updated': {
        // Handle subscription updates
        console.log('Subscription updated:', {
          subscriptionId: event.data.id,
          status: event.data.status,
          customerId: event.data.customer_id,
        });

        break;
      }

      case 'subscription.canceled': {
        // Handle subscription cancellation
        console.log('Subscription cancelled:', {
          subscriptionId: event.data.id,
          customerId: event.data.customer_id,
          canceledAt: event.data.canceled_at,
        });

        break;
      }

      case 'transaction.payment_failed': {
        // Handle failed payment
        console.log('Payment failed:', {
          transactionId: event.data.id,
          customerId: event.data.customer_id,
          reason: event.data.details.payment_method?.card?.failure_reason,
        });

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.event_type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
