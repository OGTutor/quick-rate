import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { TelegramService } from 'src/telegram/telegram.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './schema/review.schema';

class Leak {}

const leaks = [];

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(Review.name)
		private readonly ReviewModel: Model<ReviewDocument>,
		private readonly TelegramService: TelegramService
	) {}

	async create(dto: CreateReviewDto) {
		await this.notify(dto);
		return this.ReviewModel.create(dto);
	}

	async delete(id: string) {
		return this.ReviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: Types.ObjectId) {
		leaks.push(new Leak());
		return this.ReviewModel.find({ productId }).exec();
	}

	async deleteByProductId(productId: Types.ObjectId) {
		return this.ReviewModel.deleteMany({ productId }).exec();
	}

	async notify(dto: CreateReviewDto) {
		const message =
			`Name: ${dto.name}\n` +
			`Title: ${dto.title}\n` +
			`Description: ${dto.description}\n` +
			`Rating: ${dto.rating}\n` +
			`Product_ID: ${dto.productId}`;

		await this.TelegramService.sendMessage(message, {
			reply_markup: {
				inline_keyboard: [
					[
						{
							url: `https://fonts.google.com/`,
							text: '💼 Go to product',
						},
					],
				],
			},
		});
	}
}
