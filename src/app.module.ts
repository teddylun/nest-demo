import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EventsModule } from './events/events.module'
import { BitcoinsModule } from './bitcoins/bitcoins.module'

@Module({
  imports: [EventsModule, BitcoinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
