import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Project } from 'src/models/project';
import { FirestoreProvider } from 'src/providers/firestore.provider';

@Injectable()
export class ProjectsService {
  private projectsCollection: admin.firestore.CollectionReference<admin.firestore.DocumentData>;

  constructor(private provider: FirestoreProvider) {
    this.projectsCollection = provider.db.collection(
      'project-gallery_projects',
    );
  }

  async getAll(): Promise<Project[]> {
    const docs = (await this.projectsCollection.get()).docs;
    return docs.map((doc) => {
      const project: Project = {
        id: doc.id,
        ...doc.data(),
      } as Project;
      return project;
    });
  }
}
