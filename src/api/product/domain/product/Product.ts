import { AggregateRoot } from '../../../../domain/generic/AggregateRoot';

export class Product extends AggregateRoot<number> {
  constructor(
    public readonly id: number | null,
    public name: string,
    public price: number,
    createdAt: Date | undefined,
    updatedAt: Date | undefined,
    deletedAt: Date | undefined | null,
  ) {
    super(createdAt, updatedAt, deletedAt);
  }

  static create(param: { name: string; price: number }): Product {
    const { name, price } = param;

    return new Product(null, name, price, new Date(), new Date(), null);
  }

  toString(): any {
    return { id: this.id, name: this.name, price: this.price };
  }
}
