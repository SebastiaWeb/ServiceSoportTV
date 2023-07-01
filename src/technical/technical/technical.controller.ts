import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { TechnicalDTO } from '../dto/technical.dto';
import { TechnicalService } from './technical.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Technical')
@Controller('technical')
export class TechnicalController {

    constructor(private __technical: TechnicalService){

    }

    @Get('/:id')
    async getSoport(@Param('id') id:number){
      try {
        
        return await this.__technical.getSuports(id)
      } catch (error) {
        console.log(error);
        
      }
    }

    @Post()
    async createTechnical(@Body() createTechnical: TechnicalDTO){
        try {

            let UserResponse = await this.__technical.createTechnical(createTechnical);
      
            return { "status": 200, "response": "Create with success", UserResponse };
          } catch (error) {
            return { "status": 502, "response": "Error the save" };
          }
    }

    @Patch('/:id')
  async updateUser(@Param('id') id:number, @Body() createTechnical: TechnicalDTO) {
    try {

      let UserResponse = await this.__technical.updateTechnical(id, createTechnical);

      return { "status": 200, "response": "Update with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the update" };
    }
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id:number){
    try {

      let UserResponse = await this.__technical.deleteTechnical(id);

      return { "status": 200, "response": "Delete with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the delete" };
    }
  }
}
