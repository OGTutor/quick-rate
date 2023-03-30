import { IsNumber, IsString, Max, Min } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';
import { Types } from 'mongoose';

export class CreateReviewDto {
	@IsString()
	name: string;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@Max(5, { message: 'Rating cannot be more than 5!' })
	@Min(1, { message: 'Rating cannot be less than 1!' })
	@IsNumber()
	rating: number;

	@IsObjectId({ message: 'Product id is invalid!' })
	productId: Types.ObjectId;
}
