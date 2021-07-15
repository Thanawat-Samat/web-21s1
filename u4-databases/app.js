const express = require('express')
const expHbs = require('express-handlebars')
const { json, urlencoded } = require('body-parser')

const app = express()

// Tamplates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['/views/partials', './views/layouts']
}))

// middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extname: false }))

// Routes
// TODO later

const PORT = 3000
app.listen(PORT,
  () => console.log(`Listening: http://localhost:${PORT}`))
