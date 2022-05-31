import { Identity } from '../../../domain/generic/Identity';

export class UserId extends Identity {
  constructor(key: string) {
    super(key);
  }
}
