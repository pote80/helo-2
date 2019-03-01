const express = require('express')
const { json } = require('body-parser')
const massive = require('massive')
const session = require('express-session')
require('dotenv').config()
const ac = require('./controllers/authController')

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

const app = express()

app.use(json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 5
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(`"I'm in."`)
})


app.post('/auth/register', ac.register)
app.post('/auth/login', ac.login)

app.get('/auth/current', ac.getUser)


app.listen(SERVER_PORT, () => {
    console.log(`Ship docked at port ${SERVER_PORT}`)
})
