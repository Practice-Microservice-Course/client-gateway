import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ORDER_SERVICE } from 'src/config';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          port: envs.ORDERS_MICROSERVICE_PORT,
          host: envs.ORDERS_MICROSERVICE_HOST,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
