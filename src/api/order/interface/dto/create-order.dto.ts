import { IsString, MaxLength, Length, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  public readonly user_id: number;

  @IsNumber()
  public readonly product_id: number;

  @IsString()
  @Length(3, 32)
  public readonly address: string;
}
