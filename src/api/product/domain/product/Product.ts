import { AggregateRoot } from '../../../../domain/generic/AggregateRoot';

export class Product extends AggregateRoot<number> {
  constructor(
    private id: number,
    private name: string,
    private price: number,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
  ) {
    super(createdAt, updatedAt, deletedAt);
  }

  static create(param: { name: string; price: number }): Product {
    const { name, price } = param;

    return new Product(null, name, price, new Date(), new Date(), null);
  }

  setName(name: string) {
    this.name = name;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  toString(): any {
    return { id: this.id, name: this.name, price: this.price };
  }
}
