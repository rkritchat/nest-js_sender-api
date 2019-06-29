import { Module } from '@nestjs/common';
import { UserInfoController } from './userinfo.controller';
import { UserInfoService } from './userinfo.service';
import { DatabaseModule } from '../database/connection/database.module';
import { userInfoProviders } from '../database/schema/userinfo/userinfo.provider';
import { EncrypService } from '../common/encryp.server';

@Module({
  imports: [DatabaseModule],
  providers: [UserInfoService, ...userInfoProviders, EncrypService],
  controllers: [UserInfoController],
})
export class UserInfoModule {}
