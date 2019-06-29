import { Module } from '@nestjs/common';
import { UserInfoModule } from './userinfo/userinfo.module';

@Module({
  imports: [UserInfoModule],
})
export class AppModule {}
