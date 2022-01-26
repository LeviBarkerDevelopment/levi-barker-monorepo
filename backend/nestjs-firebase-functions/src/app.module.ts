import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsController } from './controllers/projects/projects.controller';
import { FirestoreProvider } from './providers/firestore.provider';
import { ProjectsService } from './services/projects/projects.service';

@Module({
  imports: [],
  controllers: [AppController, ProjectsController],
  providers: [AppService, FirestoreProvider, ProjectsService],
})
export class AppModule {}
