import { Injectable, Inject } from '@nestjs/common';
import { UserModel } from '../model/UserModel';
import { Model } from 'mongoose';
import { User } from '../database/schema/userinfo/userinfo.interface';
import { USER_MOEDL } from '../constant/constants';

@Injectable()
export class UserInfoService {
  constructor(@Inject(USER_MOEDL) private readonly userDao: Model<User>) {}
  createUser(userModel: UserModel) {
    const user = new this.userDao(userModel);
    return user.save();
  }

  getAllUser() {
    return this.userDao.find();
  }
}
