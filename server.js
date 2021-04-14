const express = require("express")
const routes = require('./src/routes')
const app = express();

const port = 5000

require('./src/database/index')

app.use(express.json());
app.use(routes);


app.listen(port , ()=>{
    console.log("servidor rodanto na port http//localhost:5000")
})