import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { FieldValue } from '@google-cloud/firestore';

@Injectable()
export class FirestoreProvider {
  public db: firebase.firestore.Firestore;

  constructor() {
    /*eslint-disable*/
    this.db = firebase.initializeApp({
        credential: firebase.credential.cert(require('../../assets/cert.json')),
        databaseURL:
          'https://mono-container-project-default-rtdb.firebaseio.com',
      })
      .firestore();
    /*eslint-enable*/
  }

  public timestamp(): FieldValue {
    return firebase.firestore.FieldValue.serverTimestamp();
  }
}
