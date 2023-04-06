import { ITelegramOptions } from 'src/telegram/telegram.interface';

export const getTelegramConfig = (): ITelegramOptions => {
	const token = process.env.TELEGRAM_TOKEN;
	if (!token) throw new Error('Token was not set!');

	return {
		chatId: process.env.TELEGRAM_CHAT_ID ?? '',
		token,
	};
};
