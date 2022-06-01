import { User } from '../../../user/domain/user/User';

export class Account {
  readonly id: number;
  readonly user_id: number;
  readonly user?: User;
}
