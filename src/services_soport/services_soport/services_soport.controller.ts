import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientDTO } from 'src/client/dto/client.dto';
import { ServiceSoportDTO } from '../dto/service_soporte.dto';
import { ServicesSoportService } from './services_soport.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Service and Ticket')
@Controller('services-soport')
export class ServicesSoportController {

    constructor(private __serviceSoport: ServicesSoportService){

    }

    @Get('')  
    @ApiQuery({
        name: 'id',
        required: false,
        type: Number,
        description: 'The ID of the client (optional)',
      })
    async getTechnical(@Query('id') id?: number){
        try {

            let UserResponse = await this.__serviceSoport.getAllSolicitud();
      
            return { "status": 200, "response": "Create with success", UserResponse };
          } catch (error) {
            return { "status": 502, "response": "Error the save: "+error };
          }
    }

    @ApiOperation({ summary: 'Generate ticket', description: 'Genera the ticket and solicitud' })
    @Post()
    async createTechnical(@Body() createServiceSoportDTO: ServiceSoportDTO){
        try {

            let UserResponse = await this.__serviceSoport.createServiceSoport(createServiceSoportDTO);
      
            return { "status": 200, "response": "Create with success", UserResponse };
          } catch (error) {
            return { "status": 502, "response": "Error the save: "+error };
          }
    }

    @Patch('/:id')
  async updateUser(@Param('id') id:number, @Body() createServiceSoportDTO: ServiceSoportDTO) {
    try {

      let UserResponse = await this.__serviceSoport.updateServiceSoport(id, createServiceSoportDTO);

      return { "status": 200, "response": "Update with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the update"+error };
    }
  }

  @Delete('/:id')
  async deleteServicioSoport(@Param('id') id:number){
    try {

      let UserResponse = await this.__serviceSoport.deleteServiceSoport(id);

      return { "status": 200, "response": "Delete with success", UserResponse };
    } catch (error) {
      return { "status": 502, "response": "Error the delete" };
    }
  }
}
