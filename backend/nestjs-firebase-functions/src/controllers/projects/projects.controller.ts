import { Controller, Get } from '@nestjs/common';
import { Project } from 'src/models/project';
import { ProjectsService } from 'src/services/projects/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  async getAll(): Promise<Project[]> {
    return await this.projectsService.getAll();
  }
}
