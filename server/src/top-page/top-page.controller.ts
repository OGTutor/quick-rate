import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Patch,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { NOT_FOUND_TOP_PAGE_ERROR } from './top-page.constants';
import { TopPageService } from './top-page.service';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly TopPageService: TopPageService) {}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Body() dto: CreateTopPageDto) {
		return this.TopPageService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Get(':id')
	async get(@Param('id', IdValidationPipe) id: string) {
		const page = await this.TopPageService.findById(id);
		if (!page) {
			throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
		}

		return page;
	}

	@Get('by-alias/:alias')
	async getByAlias(@Param('alias') alias: string) {
		const page = await this.TopPageService.findByAlias(alias);
		if (!page) {
			throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
		}

		return page;
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedPage = await this.TopPageService.deleteById(id);
		if (!deletedPage) {
			throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
		}
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id')
	async patch(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: CreateTopPageDto
	) {
		const updatedPage = await this.TopPageService.updateById(id, dto);
		if (!updatedPage) {
			throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
		}

		return updatedPage;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindTopPageDto) {
		return this.TopPageService.findByCategory(dto.firstCategory);
	}

	@Get('text-search/:text')
	async textSearch(@Param('text') text: string) {
		return this.TopPageService.findByText(text);
	}
}
