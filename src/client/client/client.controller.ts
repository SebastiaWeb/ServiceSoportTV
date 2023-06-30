import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDTO } from '../dto/client.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Client')
@Controller('client')
export class ClientController {

    constructor(private __client: ClientService){

    }

    @Get()
    async getTechnical(){

        try {

            let UserResponse = await this.__client.getAllClient();
      
            return { "status": 200, "response": "Create with success", UserResponse };
          } catch (error) {
            return { "status": 502, "response": "Error the save: "+error };
          }
    }

    @Post()
    async createTechnical(@Body() createClientDTO: ClientDTO){
        try {

            let UserResponse = await this.__client.createClient(createClientDTO);
      
            return { "status": 200, "response": "Create with success", UserResponse };
          } catch (error) {
            return { "status": 502, "response": "Error the save" };
          }
    }

    @Patch('/:id')
  async updateUser(@Param('id') id:number, @Body() createClientDTO: ClientDTO) {
    try {

      let UserResponse = await this.__client.updateClient(id, createClientDTO);

      return { "status": 200, "response": "Update with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the update" };
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id:number){
    try {

      let UserResponse = await this.__client.deleteClient(id);

      return { "status": 200, "response": "Delete with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the delete" };
    }
  }

}
