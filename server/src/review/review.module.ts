import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from './review.controller';
import { Review, ReviewSchema } from './schema/review.schema';
import { ReviewService } from './review.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Review.name, schema: ReviewSchema },
		]),
	],
	controllers: [ReviewController],
	providers: [ReviewService],
})
export class ReviewModule {}
