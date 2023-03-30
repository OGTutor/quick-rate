import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './schema/review.schema';

class Leak {}

const leaks = [];

@Injectable()
export class ReviewService {
	constructor(
		@InjectModel(Review.name)
		private readonly ReviewModel: Model<ReviewDocument>
	) {}

	async create(dto: CreateReviewDto) {
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
}
