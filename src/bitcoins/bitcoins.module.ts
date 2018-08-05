import { Module } from '@nestjs/common'
import { BitcoinsController } from './bitcoins.controller'
import { BitcoinsService } from './bitcoins.service'

@Module({
  controllers: [BitcoinsController],
  providers: [BitcoinsService],
})

export class BitcoinsModule {}