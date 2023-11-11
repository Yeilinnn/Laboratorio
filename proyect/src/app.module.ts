// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurseModule } from './curse/curse.module';
// Cambia la siguiente línea
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/entities/student.entity';
import { Curse } from './curse/entities/curse.entity';

@Module({
  imports: [CurseModule, StudentsModule, // Asegúrate de que el nombre sea correcto
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ye.022004',
      database: 'entidad',
      entities: [Student, Curse],
      autoLoadEntities: true,
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
