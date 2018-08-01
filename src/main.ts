import { NestFactory } from '@nestjs/core'
import { WsAdapter } from '@nestjs/websockets/adapters'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useWebSocketAdapter(new WsAdapter(app.getHttpServer()))
  await app.listen(3000)
}
bootstrap()
