import fb from 'firebase/app'
import config from './firebase-config'
import 'firebase/firestore'

fb.initializeApp(config)

export const firebase = fb
export const db = firebase.firestore()
export const Timestamp = firebase.firestore.Timestamp
export const FieldValue = firebase.firestore.FieldValue
