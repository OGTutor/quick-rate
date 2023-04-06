import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { getMongoDbConfig } from './config/mongo.config';
import { FilesModule } from './files/files.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TelegramModule } from './telegram/telegram.module';
import { TopPageModule } from './top-page/top-page.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoDbConfig,
		}),
		AuthModule,
		TopPageModule,
		ProductModule,
		ReviewModule,
		FilesModule,
		TelegramModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
