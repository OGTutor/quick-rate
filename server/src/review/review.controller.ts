import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewDocument } from './schema/review.schema';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewDocument, '_id'>) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('by-product/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
