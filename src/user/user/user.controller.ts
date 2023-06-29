import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private userService: UserService)
  {}

    @Get()
    getHello(): string {
      return "Holamundo";
    }

    @Post()
    async createUser(@Body() createUser: UserDTO){
      console.log(createUser)
      this.userService.createUser(createUser);
    }
}
