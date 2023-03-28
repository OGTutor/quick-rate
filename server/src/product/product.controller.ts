import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductDocument } from './schema/product.schema';

@Controller('product')
export class ProductController {
	@Post('create')
	async create(@Body() dto: Omit<ProductDocument, '_id'>) {}

	@Get(':id')
	async get(@Param('id') id: string) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductDocument) {}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto) {}
}
