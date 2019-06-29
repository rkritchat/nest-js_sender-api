import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncrypService {
  private salt: number = 10;

  async hash(pwd: string) {
    const hashTxt = await bcrypt.hash(pwd, this.salt);
    return hashTxt;
  }

  async compare(pwd: string, hashPwd: string) {
    return await bcrypt.compare(pwd, hashPwd);
  }
}
