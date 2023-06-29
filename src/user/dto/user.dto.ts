import { IsNumber, IsString, IsEmail, IsBoolean } from 'class-validator';

export class UserDTO {
  
    @IsString()
    firstName: string;
  
    @IsString()
    lastName: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  
    @IsString()
    movil: string;
  
    @IsBoolean()
    isActive: boolean;
  }
  