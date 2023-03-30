import {
	BadRequestException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { compare, genSalt, hash } from 'bcryptjs'
import { Model } from 'mongoose'
import {
	ALREADY_REGISTERED_ERROR,
	USER_NOT_FOUND_ERROR,
	WRONG_PASSWORD_ERROR
} from './auth.constants'
import { AuthDto } from './dto/auth.dto'
import { User, UserDocument } from './schema/user.schema'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
		private readonly JwtService: JwtService
	) {}

	async createUser(dto: AuthDto) {
		const oldUser = await this.findUser(dto.login);
		if (oldUser) {
			throw new BadRequestException(ALREADY_REGISTERED_ERROR);
		}

		const salt = await genSalt(10);
		const newUser = new this.UserModel({
			email: dto.login,
			passwordHash: await hash(dto.password, salt),
		});

		const user = await newUser.save();
		const tokens = await this.issueTokenPair(String(user.email));

		return { user: this.returnUserFields(user), ...tokens };
	}

	async findUser(email: string) {
		return this.UserModel.findOne({ email }).exec();
	}

	async validateUser(dto: AuthDto) {
		const user = await this.findUser(dto.login);
		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
		}

		const isCorrectPassword = await compare(
			dto.password,
			user.passwordHash
		);
		if (!isCorrectPassword) {
			throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
		}

		return user;
	}

	async issueTokenPair(email: string) {
		const payload = { email };

		const accessToken = await this.JwtService.signAsync(payload, {
			expiresIn: '1h',
		});

		return { accessToken };
	}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto);
		const tokens = await this.issueTokenPair(String(user.email));

		return {
			user: this.returnUserFields(user),
			...tokens,
		};
	}

	returnUserFields(user: UserDocument) {
		return {
			_id: user._id,
			email: user.email,
		};
	}
}
