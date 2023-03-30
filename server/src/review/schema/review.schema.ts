import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';

export type ReviewDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {
	@Prop()
	name: string;

	@Prop()
	title: string;

	@Prop()
	description: string;

	@Prop()
	rating: number;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
	productId: Product;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
