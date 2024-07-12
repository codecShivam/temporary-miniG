import { NextApiRequest, NextApiResponse } from "next";

const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { message } = req.body;

    if (message && message.text && message.text.toLowerCase() === "/start") {
      const chatId = message.chat.id;
      const text = "Welcome to the Telegram bot!";

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });
    }

    res.status(200).json({ status: "ok" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
