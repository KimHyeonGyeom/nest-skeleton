export class CreateOrderCommand {
  constructor(
    public readonly user_id: number,
    public readonly product_id: number,
    public readonly address: string,
  ) {}
}
