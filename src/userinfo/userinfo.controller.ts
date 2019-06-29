import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserInfoService } from './userinfo.service';
import { UserInfoDto } from '../model/UserInfoDto';
import { UserDto } from '../model/UserDto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Userinfo')
@Controller('user')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}
  @Get()
  getAllUser() {
    return this.userInfoService.getAllUser();
  }

  @Post()
  register(@Body() userInfo: UserInfoDto) {
    return this.userInfoService.createUser(userInfo);
  }

  @Post('login')
  login(@Body() userInfo: UserDto) {
    return this.userInfoService.login(userInfo);
  }
}
