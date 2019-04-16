
//Importaciones

const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const  { User } = require('./models/user')
const { auth } = require('./middleware/auth')
const  { Employees } = require('./models/employee')

require('dotenv').config()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, (err) => {
  if(err) return err
  console.log("Conectado a MongoDB")
})
//3.Modelos


//4.rutas para employees
app.post('/api/employee/register', (req, res) => {
    const employees = new Employees(req.body)
    user.save((err, doc) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
            userdata: doc
        })
    })
})




//4.rutas para usuario


app.post('/api/users/register', (req, res) => {
  const user = new User(req.body)
  user.save((err, doc) => {
      if(err) return res.json({success: false, err})
      res.status(200).json({
          success: true,
          userdata: doc
      })
  })
})

app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      username: req.user.username,
      name: req.user.name,
      lastname: req.user.lastname,
     
    
      
  })
})

app.get('/api/users/logout', auth, (req, res) => {
    console.log(req.user)
  User.findOneAndUpdate(
      {_id: req.user._id},
      {token: ''},
      (err, doc) => {
          if(err) return res.json({success: false, err})
          return res.status(200).json({
              success: true
          })
      }
  )
})

app.post('/api/users/login', (req, res) => {
  // 1. Encuentra el correo
      User.findOne({'username': req.body.username}, (err,user) => {
          if(!user) return res.json({loginSuccess: false, message: 'Auth fallida, email no encontrado'})
              // 2. Obtén el password y compruébalo
              user.comparePassword(req.body.password, (err, isMatch) => {
                if(!isMatch) return res.json({loginSuccess: false, message: "Password erróneo"})
                   // 3. Si todo es correcto, genera un token
                   user.generateToken((err, user)=> {
                    if(err) return res.status(400).send(err)
                    // Si todo bien, debemos guardar este token como un "cookie"
                    res.cookie('jusa_auth', user.token).status(200).json(
                        {loginSuccess: true}
                    )
                  })     
                })
      })
})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})

