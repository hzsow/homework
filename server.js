const jsonServer = require('json-server')
const auth = require('json-server-auth')
 
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const cors = require('cors');

const express = require('express');
const app2 = express();
const multer = require('multer')

app.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);

app.db = router.db
 
app.use(auth)
app.use(router)
app.listen(3051)



app2.use(cors())
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })
  
  const upload = multer({ storage: storage }).array('file')
  
app2.get('/',function(req,res){
    return res.send('Hello Server')
})
app2.post('/upload',function(req, res) {
    
    upload(req, res, function (err) {
     
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        } 
        return res.status(200).send(req.file)
      })
});

app2.listen(8000);