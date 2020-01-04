const express = require('express');
const multer  = require("multer");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportStrategy = require('./middleware/passport-strategy');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const keys = require('./keys')
const request = require('request');
const consola = require('consola');
const validator = require('validator');
const nodemailer = require('nodemailer');
const { Nuxt, Builder } = require('nuxt');

const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const formRoutes = require('./routes/form.routes');
const app = express();

mongoose.connect(keys.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(error => console.log(error))

app.use(passport.initialize())
passport.use(passportStrategy)

// app.use(morgan('combined'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
  extended: true, limit: '10mb'
}));
app.use(bodyParser.json( {limit: '10mb'} ));
app.use(cors());

app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)
app.use('/api/form', formRoutes)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'


async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
