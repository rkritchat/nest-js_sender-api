import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../../constant/constants';
export const databaseProvider = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://rkritchat:${process.env.DATABASE_PWD}@contactkeeper-pis16.mongodb.net/sender?retryWrites=true&w=majority`,
      ),
  },
];
