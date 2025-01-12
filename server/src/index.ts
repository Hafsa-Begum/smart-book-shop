import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { createNewBook , createNewBookCategory, getBookCategory, getBooks} from './controllers';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.get('/health', (req, res)=>{
    res.status(200).json({status:'Up'})
})
//routes
app.get('/book/get', getBooks);
app.post('/book/create', createNewBook);
app.get('/book-category/get', getBookCategory);
app.post('/book-category/create', createNewBookCategory);

app.use((req, res)=>{
    res.status(404).json({message:'Not found'})
})
app.use((err,req, res, next)=>{
    console.error(err.stack)
    res.status(500).json({message:'Internal server error'})
})

const port = process.env.PORT || 4000
const serviceName = 'Smart-Book-Shop'

app.listen(port,()=>{
    console.log(`${serviceName} is running on port ${port}`)
})