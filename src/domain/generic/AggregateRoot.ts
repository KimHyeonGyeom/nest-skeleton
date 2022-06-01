export class AggregateRoot<TId extends number> extends Number {
  constructor(
    private readonly createdAt: Date,
    private readonly updatedAt: Date,
    private readonly deletedAt: Date | null,
  ) {
    super();
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }
  getUpdatedAt(): Date {
    return this.updatedAt;
  }
  getDeletedAt(): Date | null {
    return this.deletedAt;
  }
}
