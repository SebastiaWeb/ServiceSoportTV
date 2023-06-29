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
      try {
        
        let UserResponse = await this.userService.createUser(createUser);

        return {"status": 200, "response":"Create with success", UserResponse};
      } catch (error) {
        return {"status": 502, "response":"Error the save"};
      }
    }
}
