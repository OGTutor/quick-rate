import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPage, TopPageSchema } from './schema/top-page.schema';
import { TopPageController } from './top-page.controller';
import { TopPageService } from './top-page.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: TopPage.name,
				schema: TopPageSchema,
			},
		]),
	],
	controllers: [TopPageController],
	providers: [TopPageService],
})
export class TopPageModule {}
