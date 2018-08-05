import { Controller, Get, UseInterceptors } from '@nestjs/common'
import { BitcoinsService } from './bitcoins.service'
import { TransformInterceptor } from '../common/interceptors/transform.interceptor'
import { LoggingInterceptor } from '../common/interceptors/logging.interceptor'

@Controller('bitcoins')
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
export class BitcoinsController {
  constructor(private readonly bitcoinsService: BitcoinsService) {}

  @Get()
  async list() {
    try {
      const result: any = await this.bitcoinsService.list(100)
      return result.data
    } catch (e) {
      throw e
    }
  }
}