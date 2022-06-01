import { AggregateRoot } from '../../../../domain/generic/AggregateRoot';

export class User extends AggregateRoot<number> {
  constructor(
    public readonly id: number | null,
    public readonly name: string,
    public readonly password: string,
    createdAt: Date | undefined,
    updatedAt: Date | undefined,
    deletedAt: Date | null | undefined,
  ) {
    super(createdAt, updatedAt, deletedAt);
  }

  static create(param: { name: string; password: string }): User {
    const { name, password } = param;

    return new User(null, name, password, new Date(), new Date(), null);
  }

  toString(): any {
    return { id: this.id, name: this.name, password: this.password };
  }
}
