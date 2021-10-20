import * as express from 'express'
export const app = express()

app.get('/', (req, res) => res.send('Hello from Cloud Functions'))
app.get('/test', (req, res) => res.send('Test'))
