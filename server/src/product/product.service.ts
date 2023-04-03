import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product.name)
		private readonly ProductModel: Model<ProductDocument>
	) {}

	async create(dto: CreateProductDto) {
		return this.ProductModel.create(dto);
	}

	async findById(id: string) {
		return this.ProductModel.findById(id).exec();
	}

	async deleteById(id: string) {
		return this.ProductModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string, dto: CreateProductDto) {
		return this.ProductModel.findByIdAndUpdate(id, dto, {
			new: true,
		}).exec();
	}

	async findWithReviews(dto: FindProductDto) {
		return this.ProductModel.aggregate()
			.match({
				categories: dto.category,
			})
			.lookup({
				from: 'reviews',
				localField: '_id',
				foreignField: 'productId',
				as: 'reviews',
			})
			.addFields({
				reviewCount: { $size: '$reviews' },
				reviewAvg: { $avg: '$reviews.rating' },
				reviews: {
					$function: {
						body: `function (reviews) {
						reviews.sort(
							(a, b) =>
								new Date(b.createdAt) -
								new Date(a.createdAt)
						);
						return reviews;
					}`,
						args: ['$reviews'],
						lang: 'js',
					},
				},
			})
			.sort({
				_id: 1,
			})
			.limit(dto.limit)
			.exec();
	}
}
