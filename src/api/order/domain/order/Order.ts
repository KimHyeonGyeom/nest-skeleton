import { AggregateRoot } from '../../../../domain/generic/AggregateRoot';

export class Order extends AggregateRoot<number> {
  constructor(
    private id: number | null,
    private user_id: number,
    private product_id: number,
    private address: string,
    createdAt: Date | undefined,
    updatedAt: Date | undefined,
    deletedAt: Date | undefined | null,
  ) {
    super(createdAt, updatedAt, deletedAt);
  }

  static create(param: {
    user_id: number;
    product_id: number;
    address: string;
  }): Order {
    const { user_id, product_id, address } = param;

    return new Order(
      null,
      user_id,
      product_id,
      address,
      new Date(),
      new Date(),
      undefined,
    );
  }

  getUserId(): number {
    return this.user_id;
  }

  getProductId(): number {
    return this.product_id;
  }

  getAddress(): string {
    return this.address;
  }

  toString(): any {
    return {
      id: this.id,
      user_id: this.user_id,
      product_id: this.product_id,
      address: this.address,
    };
  }
}
