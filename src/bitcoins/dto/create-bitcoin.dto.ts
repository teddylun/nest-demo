import { IsNumber, IsString } from 'class-validator'

export class CreateBitcoinDto {
  @IsNumber() readonly id: number
  @IsString() readonly name: string
  @IsString() readonly symbol: string
  @IsString() readonly website_slug: string
}