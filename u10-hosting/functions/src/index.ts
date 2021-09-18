import * as functions from 'firebase-functions'
import { app } from './app'

//export const example = functions.region('namehost').https.onRequest(app)  //if you pay
export const example = functions.https.onRequest(app)
