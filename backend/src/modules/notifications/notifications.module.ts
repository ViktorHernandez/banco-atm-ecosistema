import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from '../accounts/entities/cuenta.entity';
import { Notificacion } from './entities/notificacion.entity';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { RealtimeService } from './realtime.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notificacion, Cuenta])],
  controllers: [NotificationsController],
  providers: [NotificationsService, RealtimeService],
  exports: [TypeOrmModule, NotificationsService, RealtimeService],
})
export class NotificationsModule {}
