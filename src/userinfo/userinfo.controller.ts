import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserInfoService } from './userinfo.service';
import { UserModel } from '../model/UserModel';

@Controller('user')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}
  @Get()
  getAllUser() {
    console.log('come herer');
    return this.userInfoService.getAllUser();
  }

  @Post()
  register(@Body() userInfo: UserModel) {
    return this.userInfoService.createUser(userInfo);
  }
}
