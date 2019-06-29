import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { UserInfoDto } from '../model/UserInfoDto';
import { Model } from 'mongoose';
import { User } from '../database/schema/userinfo/userinfo.interface';
import { USER_MOEDL } from '../constant/constants';
import { EncrypService } from '../common/encryp.server';
import { UserDto } from '../model/UserDto';

@Injectable()
export class UserInfoService {
  constructor(
    @Inject(USER_MOEDL) private readonly userDao: Model<User>,
    private readonly encrypt: EncrypService,
  ) {}

  async createUser(userModel: UserInfoDto) {
    const { email } = userModel;
    await this.validateDuplicateEmail(email);
    await this.encryptPasword(userModel);
    return new this.userDao(userModel).save();
  }

  async getAllUser() {
    return this.userDao.find();
  }

  async login(userModel: UserDto) {
    const { email, password } = userModel;
    const user = await this.userDao.findOne({ email });
    await this.validatePassword(user, password);
    return user;
  }

  private async encryptPasword(user: UserInfoDto) {
    user.password = await this.encrypt.hash(user.password.toString());
  }

  private async validateDuplicateEmail(email: string) {
    const rs = await this.userDao.findOne({ email });
    if (rs) throw new BadRequestException('This email is already exist.');
  }

  private async validatePassword(user: User, password: string) {
    if (
      !user ||
      !(await this.encrypt.compare(password, user.password.toString()))
    ) {
      throw new BadRequestException('Invalid Credentials');
    }
    console.log(user);
  }
}
