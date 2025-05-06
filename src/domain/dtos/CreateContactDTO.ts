import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateContactDTO {
  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  telefone!: string;
}