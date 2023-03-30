import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserDocument } from '../schema/user.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly ConfigService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: ConfigService.get('JWT_SECRET'),
		});
	}

	async validate({ email }: Pick<UserDocument, 'email'>) {
		return email;
	}
}
