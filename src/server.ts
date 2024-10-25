import  express  from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRouters from './routes/index';

dotenv.config();

const server = express();
const port = 3000

server.set('view engine', 'mustache')
server.set('view', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouters) 

//Rotas

server.use((req, res) => {
    res.send('Pagina não encontrada')
})

server.listen(process.env.PORT);