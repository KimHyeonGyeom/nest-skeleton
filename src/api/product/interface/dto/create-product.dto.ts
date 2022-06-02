import { IsString, MaxLength, Length, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3, 32)
  public readonly name: string;

  @IsNumber()
  @MaxLength(64)
  public readonly price: number;
}
