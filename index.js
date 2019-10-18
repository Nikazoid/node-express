const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const logger = require('./Logger')
const members = require('./Members')

const PORT = process.env.PORT || 5000

const app = express()

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Home page route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}))

// use a middleware method (static server style)
// app.use(express.static(path.join(__dirname, 'public')))

// Members API routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))