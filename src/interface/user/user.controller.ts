import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Request,
  UseGuards,
  NotAcceptableException,
  Inject,
} from '@nestjs/common';
//import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from '../../application/user/UserService';
import { getManager } from 'typeorm';
import {
  getEntityManagerOrTransactionManager,
  Transactional,
} from 'typeorm-transactional-cls-hooked';

// import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';
// import { LocalAuthGuard } from '@auth/guards/local-auth.guard';
// import { GoogleAuthGuard } from '@auth/guards/google-auth.guard';
//
// import { CreateUserDto } from '@user/interface/dto/create-user.dto';
// import { GoogleLoginDto } from '@user/interface/dto/google-login.dto';
//
// import { CreateUserCommand, CreateUserCommandResult } from '@user/application/command/create-user.command';
// import { EmailVerificationCommand, EmailVerificationCommandResult } from '@user/application/command/email-verification.command';
// import { VerifyGoogleTokenCommand, VerifyGoogleTokenCommandResult } from '@user/application/command/verify-google-token.command';
// import { AuthorizationCommand as AuthorizationCommand } from '@auth/command/authorization.command';
// import { GetUserInfoQuery, GetUserInfoQueryResult } from '@user/application/query/get-user-info.query';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    @Inject('UserService') private readonly userService: UserService,
  ) {}

  // @UseGuards(JwtAuthGuard)
  // @Get('/profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
  //
  // @UseGuards(LocalAuthGuard)
  // @Post('/auth/login')
  // async login(@Request() req: any) {
  //   const { emailAddress, password } = req.user;
  //   const command = new AuthorizationCommand(emailAddress, password);
  //   return await this.commandBus.execute(command);
  // }

  @Post()
  @Transactional()
  public signUp(@Body() dto: CreateUserDto) {
    const { email, name, password } = dto;

    const user = this.userService.createUser(dto);

    //return new SignInResponseDto(user);
  }
  //
  // @Get('/email-verification')
  // public async emailVerification(@Query('authToken') authToken: string): Promise<EmailVerificationCommandResult> {
  //   const command = new EmailVerificationCommand(authToken)
  //   return await this.commandBus.execute(command);
  // }
  //
  // // 클라이언트에서 구글 로그인 버튼을 누르면 이 엔드포인트를 호출한다.
  // @UseGuards(GoogleAuthGuard)
  // @ApiBearerAuth()
  // @Get('/google/oauth')
  // public async googleAuth() {
  //   console.log('googleAuth');
  // }
  //
  // // 사용자가 구글 로그인을 완료하면 이 엔드포인트가 호출된다. 유저 정보를 응답으로 준다.
  // // 이후는 access token을 이용해서 로그인, 회원가입 등의 동작을 한다.
  // @UseGuards(GoogleAuthGuard)
  // @Get('/google/oauth/redirect')
  // public async googleAuthRedirect(@Request() req: any) {
  //   const { user } = req;
  //
  //   if (!user) {
  //     throw new NotAcceptableException('not google user');
  //   }
  //
  //   return user;
  // }
  //
  // @Post('/google/login')
  // public async googleLogin(@Body() dto: GoogleLoginDto): Promise<VerifyGoogleTokenCommandResult> {
  //   const { accessToken } = dto;
  //
  //   const command = new VerifyGoogleTokenCommand(accessToken);
  //
  //   return await this.commandBus.execute(command);
  // }
  //
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // public getUserInfo(@Request() req: any): Promise<GetUserInfoQueryResult> {
  //   const userId = req.user.userId;
  //   const query = new GetUserInfoQuery(userId);
  //   return this.queryBus.execute(query);
  // }
}
