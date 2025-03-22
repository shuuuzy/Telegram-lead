const { exec } = require("child_process");

// استقبال البيانات من GitHub Actions
const offerId = process.env.OFFER_ID;
const payout = process.env.PAYOUT;
const chatId = process.env.CHAT_ID;
const botToken = process.env.BOT_TOKEN;

// بناء الرسالة
const message = `New Lead! 🎉\nOffer ID: ${offerId}\nPayout: $${payout / 100}`;

// إرسال الرسالة إلى Telegram باستخدام curl
exec(`curl -X POST "https://api.telegram.org/bot${botToken}/sendMessage" -d "chat_id=${chatId}&text=${message}"`);
