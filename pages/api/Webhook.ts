import { NextApiRequest, NextApiResponse } from 'next';

const token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Handle /start command
    if (message && message.text && message.text.toLowerCase() === '/start') {
      const chatId = message.chat.id;
      const text = "Let's get started 🍿\n\nPlease tap the button below to launch MiniG!";
      const imageUrl = 'https://i.ibb.co/9skGSgD/miniG.jpg';

      try {
        // Send an image with a caption and an inline button
        await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            photo: imageUrl,
            caption: text,
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Launch MiniG',
                    url: 'https://t.me/MiniGPUbot/MiniG',
                  },
                ],
              ],
            },
          }),
        });

        console.log('Start command image with caption and button sent');
      } catch (error) {
        console.error('Error sending start command image with caption and button:', error);
      }
    }

    res.status(200).json({ status: 'ok' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
