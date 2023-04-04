import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import {
	TopLevelCategory,
	TopPage,
	TopPageDocument,
} from './schema/top-page.schema';

@Injectable()
export class TopPageService {
	constructor(
		@InjectModel(TopPage.name)
		private readonly TopPageModel: Model<TopPageDocument>
	) {}

	async create(dto: CreateTopPageDto) {
		return this.TopPageModel.create(dto);
	}

	async findById(id: string) {
		return this.TopPageModel.findById(id).exec();
	}

	async findByAlias(alias: string) {
		return this.TopPageModel.findOne({ alias }).exec();
	}

	async findByCategory(firstCategory: TopLevelCategory) {
		return this.TopPageModel.aggregate()
			.match({ firstCategory })
			.group({
				_id: { secondCategory: '$secondCategory' },
				pages: { $push: { alias: '$alias', title: '$title' } },
			})
			.exec();
	}

	async findByText(text: string) {
		return this.TopPageModel.find({
			$text: { $search: text, $language: 'en', $caseSensitive: false },
		}).exec();
	}

	async deleteById(id: string) {
		return this.TopPageModel.findByIdAndDelete(id).exec();
	}

	async updateById(id: string, dto: CreateTopPageDto) {
		return this.TopPageModel.findByIdAndUpdate(id, dto, {
			new: true,
		}).exec();
	}
}
