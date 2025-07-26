import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, budget, locale } = await request.json();

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content based on locale
    const emailContent = {
      ar: {
        subject: `رسالة جديدة من ${name} - ${subject}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #6b46c1;">رسالة جديدة من موقعك الشخصي</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">تفاصيل المرسل:</h3>
              <p><strong>الاسم:</strong> ${name}</p>
              <p><strong>البريد الإلكتروني:</strong> ${email}</p>
              <p><strong>الموضوع:</strong> ${subject}</p>
              ${budget ? `<p><strong>الميزانية:</strong> ${budget}</p>` : ''}
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">الرسالة:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px;">
              تم إرسال هذه الرسالة من خلال نموذج التواصل في موقعك الشخصي.
            </p>
          </div>
        `
      },
      en: {
        subject: `New message from ${name} - ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #6b46c1;">New Message from Your Portfolio Website</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Sender Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent through the contact form on your portfolio website.
            </p>
          </div>
        `
      },
      tr: {
        subject: `${name} adlı kişiden yeni mesaj - ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #6b46c1;">Portfolyo Sitenizden Yeni Mesaj</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Gönderen Bilgileri:</h3>
              <p><strong>İsim:</strong> ${name}</p>
              <p><strong>E-posta:</strong> ${email}</p>
              <p><strong>Konu:</strong> ${subject}</p>
              ${budget ? `<p><strong>Bütçe:</strong> ${budget}</p>` : ''}
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Mesaj:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px;">
              Bu mesaj portfolyo sitenizdeki iletişim formu aracılığıyla gönderilmiştir.
            </p>
          </div>
        `
      }
    };

    const content = emailContent[locale as keyof typeof emailContent] || emailContent.en;

    // Send email to yourself
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: content.subject,
      html: content.html,
      replyTo: email, // Allow replying directly to the sender
    });

    // Auto-reply to the sender
    const autoReplyContent = {
      ar: {
        subject: 'شكراً لتواصلك معي - تم استلام رسالتك',
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #6b46c1;">شكراً لك ${name}!</h2>
            
            <p>تم استلام رسالتك بنجاح وسأقوم بالرد عليك في أقرب وقت ممكن.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e40af; margin-top: 0;">ملخص رسالتك:</h3>
              <p><strong>الموضوع:</strong> ${subject}</p>
              ${budget ? `<p><strong>الميزانية:</strong> ${budget}</p>` : ''}
            </div>
            
            <p>يمكنك أيضاً التواصل معي مباشرة عبر:</p>
            <ul>
              <li>الواتساب: <a href="https://wa.me/905317255372">+90 531 725 5372</a></li>
              <li>البريد الإلكتروني: mohammad.kfelati@gmail.com</li>
            </ul>
            
            <p>أتطلع للعمل معك!</p>
            
            <p style="color: #6b7280;">
              مع أطيب التحيات،<br>
              محمد قفيلاتي<br>
              مطور ويب ومهندس ذكاء اصطناعي
            </p>
          </div>
        `
      },
      en: {
        subject: 'Thank you for contacting me - Message received',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #6b46c1;">Thank you ${name}!</h2>
            
            <p>I've received your message and will get back to you as soon as possible.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            </div>
            
            <p>You can also reach me directly via:</p>
            <ul>
              <li>WhatsApp: <a href="https://wa.me/905317255372">+90 531 725 5372</a></li>
              <li>Email: mohammad.kfelati@gmail.com</li>
            </ul>
            
            <p>Looking forward to working with you!</p>
            
            <p style="color: #6b7280;">
              Best regards,<br>
              Mohammad Kfelati<br>
              Full-Stack Developer & AI Engineer
            </p>
          </div>
        `
      },
      tr: {
        subject: 'Benimle iletişime geçtiğiniz için teşekkürler - Mesajınız alındı',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #6b46c1;">Teşekkürler ${name}!</h2>
            
            <p>Mesajınızı aldım ve en kısa sürede size geri dönüş yapacağım.</p>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e40af; margin-top: 0;">Mesaj Özeti:</h3>
              <p><strong>Konu:</strong> ${subject}</p>
              ${budget ? `<p><strong>Bütçe:</strong> ${budget}</p>` : ''}
            </div>
            
            <p>Ayrıca bana doğrudan şu kanallardan ulaşabilirsiniz:</p>
            <ul>
              <li>WhatsApp: <a href="https://wa.me/905317255372">+90 531 725 5372</a></li>
              <li>E-posta: mohammad.kfelati@gmail.com</li>
            </ul>
            
            <p>Sizinle çalışmayı dört gözle bekliyorum!</p>
            
            <p style="color: #6b7280;">
              Saygılarımla,<br>
              Mohammad Kfelati<br>
              Full-Stack Developer & AI Engineer
            </p>
          </div>
        `
      }
    };

    const autoReply = autoReplyContent[locale as keyof typeof autoReplyContent] || autoReplyContent.en;

    // Send auto-reply to the sender
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: autoReply.subject,
      html: autoReply.html,
    });

    return NextResponse.json({ 
      message: 'Email sent successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', success: false },
      { status: 500 }
    );
  }
}
