import type { NextApiRequest, NextApiResponse } from 'next'
import TelegramBot from 'node-telegram-bot-api'

// Extend the global object with the bot property
declare global {
  var bot: TelegramBot | undefined
}

const token: string = '7134707799:AAGxQ_eozh597qiyBioLL6mAdN_VdOfPwgc'

if (!global.bot) {
  global.bot = new TelegramBot(token, { polling: true })

  global.bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id
    const options: TelegramBot.SendMessageOptions = {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Feature 1', callback_data: 'feature1' }],
          [{ text: 'Feature 2', callback_data: 'feature2' }],
          [{ text: 'Feature 3', callback_data: 'feature3' }]
        ]
      }
    }
    global.bot?.sendMessage(chatId, `Hello, ${msg.from?.first_name}! Welcome to the MiniG bot. What would you like to do?`, options)
  })

  global.bot.on('callback_query', (callbackQuery) => {
    const message = callbackQuery.message
    const chatId = message?.chat.id
    let responseText: string

    switch (callbackQuery.data) {
      case 'feature1':
        responseText = 'You selected Feature 1!'
        break
      case 'feature2':
        responseText = 'You selected Feature 2!'
        break
      case 'feature3':
        responseText = 'You selected Feature 3!'
        break
      default:
        responseText = 'Unknown feature selected!'
    }

    if (chatId) {
      global.bot?.sendMessage(chatId, responseText)
      global.bot?.answerCallbackQuery(callbackQuery.id)
    }
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Bot is running' })
}
