import { USER_MOEDL, DATABASE_CONNECTION } from '../../../constant/constants';
import { Connection } from 'mongoose';
import { UserSchema } from './userinfo.scema';
export const userInfoProviders = [
  {
    provide: USER_MOEDL,
    useFactory: (connection: Connection) =>
      connection.model('UserInfo', UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
