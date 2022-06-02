import { IsString, IsEmail, MaxLength, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 32)
  public readonly name: string;

  @IsString()
  @MaxLength(64)
  public readonly password: string;
}
