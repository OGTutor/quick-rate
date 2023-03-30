import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly AuthService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('register')
	async register(@Body() dto: AuthDto) {
		return this.AuthService.createUser(dto);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {
		return this.AuthService.login(dto);
	}
}
