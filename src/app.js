const express = require('express')
const app = express()

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

app.use(express.urlencoded({extended: false}))

//Middleware
app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
}))

// WRITE CODE FOR MIDDLEWARE HERE- init passport on every route call
//WRITE CODE FOR MIDDLEWARE HERE- allow passport to use "express-session"

authUser = (user, password, done) => {
    console.log(`Value of "User" in authUser function ----> ${user}`)         //passport will populate, user = req.body.username
    console.log(`Value of "Password" in authUser function ----> ${password}`) //passport will popuplate, password = req.body.password

// Use the "user" and "password" to search the DB and match user/password to authenticate the user
// 1. If the user not found, done (null, false)
// 2. If the password does not match, done (null, false)
// 3. If user found and password match, done (null, user)
    
    let authenticated_user = { id: 1234, name: "Matthew"} 
//Let's assume that DB search that user found and password matched for Matthew
    
    //ENTER THE CORRECT RETURN STATEMENT HERE(Hint : use done and authenticated_user)
}


//WRITE A LINE OF CODE DEFINING THE AUTHENTICATION STATEGY - here we will use LocalStrategy, hint(:use the authUser method defined above)


//Write down the code to serialise user here
{
// Passport will pass the authenticated_user to serializeUser as "user" 
// This is the USER object from the done() in auth function
// Now attach using done (null, user.id) tie this user to the req.session.passport.user = {id: user.id}, 
// so that it is tied to the session object
}

//Write down code to deserialise here
 {
       
// This is the id that is saved in req.session.passport.{ user: "id"} during the serialization
// use the id to find the user in the DB and get the user object with user details
// pass the USER object in the done() of the de-serializer
// this USER object is attached to the "req.user", and can be used anywhere in the App.

}


//Middleware to see how the params are populated by Passport
let count = 1

printData = (req, res, next) => {
    console.log("\n==============================")
    console.log(`------------>  ${count++}`)

    console.log(`req.body.username -------> ${req.body.username}`) 
    console.log(`req.body.password -------> ${req.body.password}`)

    console.log(`\n req.session.passport -------> `)
    console.log(req.session.passport)
  
    console.log(`\n req.user -------> `) 
    console.log(req.user) 
  
    console.log("\n Session and Cookie")
    console.log(`req.session.id -------> ${req.session.id}`) 
    console.log(`req.session.cookie -------> `) 
    console.log(req.session.cookie) 
  
    console.log("===========================================\n")

    next()
}

app.use(printData) //user printData function as middleware to print populated variables

app.get("/login", (req, res) => {
    res.render("login.ejs")

})

app.post ("/login", passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
}))

app.get("/dashboard", (req, res) => {  
    res.status(200)
    res.render("dashboard.ejs", {name: req.user.name})

})

module.exports = app
