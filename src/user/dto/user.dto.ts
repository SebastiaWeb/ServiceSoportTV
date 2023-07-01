import { IsNumber, IsString, IsEmail, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  
    @IsString({message: "firstName type date not valid"})
    @ApiProperty()
    firstName: string;
  
    @IsString({message: "lastName type date not valid"})
    @ApiProperty()
    lastName: string;
  
    @IsEmail({})
    @ApiProperty()
    email: string;
  
    @IsString({message: "lastName type date not valid"})
    @ApiProperty()
    password: string;
  
    @IsString({message: "movil type date not valid"})
    @ApiProperty()
    movil: string;
  
    @IsBoolean({message: "isActive type date not valid"})
    @ApiProperty()
    isActive: boolean;
  }
  