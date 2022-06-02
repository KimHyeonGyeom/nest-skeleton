export class AggregateRoot<TId extends number> extends Number {
  constructor(
    public readonly createdAt: Date | undefined,
    public readonly updatedAt: Date | undefined,
    public readonly deletedAt: Date | undefined | null,
  ) {
    super();
  }
}
