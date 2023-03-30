import { IsNumber, IsString } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';
import { Types } from 'mongoose';

export class CreateReviewDto {
	@IsString()
	name: string;

	@IsString()
	title: string;

	@IsString()
	description: string;

	@IsNumber()
	rating: number;

	@IsObjectId({ message: 'Product id is invalid!' })
	productId: Types.ObjectId;
}
