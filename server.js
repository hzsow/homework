const jsonServer = require('json-server')
const auth = require('json-server-auth')
 
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const cors = require('cors');

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