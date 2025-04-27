import express, { urlencoded } from "express"
import cors from "cors"

// app as express instance (express ke saktiya app meh)
const app = express()
const port = 3000

// json req bhi aa sakte hai
app.use(express.json)

// urlencode (space as %20, etc)
app.use(urlencoded({extended:true}))

// cors: special permission system
// one website doesn’t secretly access another website’s private data without permission.
app.use(cors({
    origin: 'localhost:3000',
    methods: ['GET','POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))



app.get('/', (req, res) => {
  res.send('Hello World!')
})


// port listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
