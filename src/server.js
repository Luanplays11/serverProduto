import express from 'express'
import routes from './routes/index1.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/api', routes)


app.get('/', (req, res) => {
    res.send('Hello World')
  })

  app.listen(PORT, () => {
    console.log(`Server executando em http://localhost:${PORT}`)
  })
