import { AggregateRoot } from '../../../../domain/generic/AggregateRoot';

export class User extends AggregateRoot<number> {
  constructor(
    private id: number,
    private name: string,
    private password: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    super(createdAt, updatedAt, deletedAt);
  }

  static create(param: { name: string; password: string }): User {
    const { name, password } = param;

    return new User(null, name, password, new Date(), new Date(), null);
  }

  setName(name: string) {
    this.name = name;
  }
  private getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }

  getPassword(): string {
    return this.password;
  }

  toString(): any {
    return { id: this.id, name: this.name, password: this.password };
  }
}