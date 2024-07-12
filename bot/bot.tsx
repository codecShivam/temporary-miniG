import TelegramBot from 'node-telegram-bot-api';

const token: string = process.env.NEXT_PUBLIC_BOT_TOKEN as string;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const options: TelegramBot.SendMessageOptions = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Feature 1', callback_data: 'feature1' }],
                [{ text: 'Feature 2', callback_data: 'feature2' }],
                [{ text: 'Feature 3', callback_data: 'feature3' }]
            ]
        }
    };
    bot.sendMessage(chatId, `Hello, ${msg.from?.first_name}! Welcome to the MiniG bot. What would you like to do?`, options);
});

bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message;
    const chatId = message?.chat.id;
    let responseText: string;

    switch (callbackQuery.data) {
        case 'feature1':
            responseText = 'You selected Feature 1!';
            break;
        case 'feature2':
            responseText = 'You selected Feature 2!';
            break;
        case 'feature3':
            responseText = 'You selected Feature 3!';
            break;
        default:
            responseText = 'Unknown feature selected!';
    }

    bot.sendMessage(chatId as number, responseText);
    bot.answerCallbackQuery(callbackQuery.id);
});
