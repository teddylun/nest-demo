import { Controller, Get, UseInterceptors, UseGuards, Post, Body, Param } from '@nestjs/common'
import { BitcoinsService } from './bitcoins.service'
import { TransformInterceptor } from '../common/interceptors/transform.interceptor'
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor'
import { RolesGuard } from 'common/guards/roles.guard'
import { Roles } from 'common/decorators/roles.decorator'
import { ParseIntPipe } from 'common/pipes/parse-int.pipe'

@Controller('bitcoins')
@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class BitcoinsController {
  constructor(private readonly bitcoinsService: BitcoinsService) {}

  @Get()
  async list() {
    const result: any = await this.bitcoinsService.list(100)
    return result.data
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe())id) {
    const result = await this.bitcoinsService.findOne(id)
    return result.data
  }
}