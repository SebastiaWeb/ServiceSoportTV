import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDTO } from '../dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Get()
  getHello(): string {
    return "Holamundo";
  }

  @Post()
  async createUser(@Body() createUser: UserDTO) {
    try {

      let UserResponse = await this.userService.createUser(createUser);

      return { "status": 200, "response": "Create with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the save" };
    }
  }

  @Patch('/:id')
  async updateUser(@Param('id') id:number, @Body() createUser: UserDTO) {
    try {

      let UserResponse = await this.userService.updateUser(id, createUser);

      return { "status": 200, "response": "Update with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the update" };
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id:number){
    try {

      let UserResponse = await this.userService.deleteUser(id);

      return { "status": 200, "response": "Delete with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the delete" };
    }
  }
}
