import { IsNumber, IsString, IsEmail, IsBoolean } from 'class-validator';

export class UserDTO {
  
    @IsString({message: "firstName type date not valid"})
    firstName: string;
  
    @IsString({message: "lastName type date not valid"})
    lastName: string;
  
    @IsEmail({})
    email: string;
  
    @IsString({message: "lastName type date not valid"})
    password: string;
  
    @IsString({message: "movil type date not valid"})
    movil: string;
  
    @IsBoolean({message: "isActive type date not valid"})
    isActive: boolean;
  }
  